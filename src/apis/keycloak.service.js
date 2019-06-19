/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable eol-last */
import cookies from 'weapp-cookie'
import Fly from 'flyio/dist/npm/wx'
import store from '@/store'

var fly = new Fly()

const authUrl = 'https://iopdev.10.110.25.123.xip.io/auth';
const authRealm = 'picp';
const authClientId = 'console';
const domain = '.cloud.inspur.com'

/** TODO:  数据请求失败处理 */
export default class KeycloakService {
    constructor() {
    }

    auth = {
        authUrl: authUrl,
        authRealm: authRealm,
        authClientId: authClientId,
        domain: domain
    }
    cookies = cookies

    /** token 刷新时间 */
    timeSkew;
    expiresTime = 30 * 60 * 1000
    // expiresTime = 1 * 5 * 1000 // 5s

    /** 初始化
     * 1. 
     */
    init() {
        // this.login().then(
        //     res => console.log(res, `login`)
        // )
        console.log(this.expiresTime / 1000 / 60, `min 后开始自动刷新token`)
        this.time = setInterval(() => {
            this.refToken();
            console.info(`定时刷新token`, new Date())

            // if (this.cookieService.getCookie('ecbu_isLoginValid')) {
            //   if (!this.cookieService.getCookie('ecbu_refresh_token')) {
            //     let url = this.getRedirectURL(options);
            //     window.location.href = url;
            //   } else {
            //     this.updateToken(3600).subscribe();
            //   }
            // } else {
            //   clearInterval(this.time);
            // }


        }, this.expiresTime);

    }

    /** 请求 token */
    getToken() {

    }

    /** 带用户名密码请求 token */
    reqToken(userName, passWord) {
        // 暂存到vuex中，自动登录使用
        store.commit('updateUserAuthInfo', { userName, passWord })

        let url = `${this.auth.authUrl}/realms/${this.auth.authRealm}/protocol/openid-connect/token`
        let params = `grant_type=password&client_id=${encodeURIComponent(this.auth.authClientId)}&username=${userName}&password=${passWord}`;
        fly.post(url, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(
            res => {
                const data = res.data;
                cookies.set('expires_in', data.expires_in, { domain: this.auth.domain }) // 未用到
                cookies.set('refresh_token', data.refresh_token, { domain: this.auth.domain })
                cookies.set('refresh_expires_in', data.refresh_expires_in, { domain: this.auth.domain })
                cookies.set('inspur_token', data.access_token, { domain: this.auth.domain })

                store.commit('setTokenParsed', this.decodeToken(data.access_token))
                store.commit('setRefreshToken', data.refresh_token)

                let timeLocal = new Date().getTime();   // TODO: 暂时未使用
                if (timeLocal) {
                    this.timeSkew = Math.floor(timeLocal / 1000) - this.decodeToken(data.access_token).iat;
                }
                // 更新用户登录状态
                store.commit('changeUserAuthStatus', 'cn-north')
                console.info(`登录成功`, new Date(), this.timeSkew)
                store.commit('changeUserAuthStatus', 'cn-north-3') // FIXME: debug only 开发完华北二三用户鉴权后删除
            }
        )
    }

    /** 刷新 token */
    refToken(minValidity) {
        // TODO: 一系列校验
        let url = `${this.auth.authUrl}/realms/${this.auth.authRealm}/protocol/openid-connect/token`
        let refreshToken = store.state.refreshToken

        let params = `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${encodeURIComponent(authClientId)}`;

        fly.post(url, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        ).then(
            res => {
                const data = res.data;
                cookies.set('expires_in', data.expires_in, { domain: this.auth.domain }) // 未用到
                cookies.set('refresh_token', data.refresh_token, { domain: this.auth.domain })
                cookies.set('refresh_expires_in', data.refresh_expires_in, { domain: this.auth.domain })
                cookies.set('inspur_token', data.access_token, { domain: this.auth.domain })

                store.commit('setTokenParsed', this.decodeToken(data.access_token))
                store.commit('setRefreshToken', data.refresh_token)
                let timeLocal = new Date().getTime();
                if (timeLocal) {
                    this.timeSkew = Math.floor(timeLocal / 1000) - this.decodeToken(data.access_token).iat;
                }
                console.log(`刷新token成功`, new Date())
            }
        )
    }

    /** 自动登录 */
    autoLogin() {
        if (store.state.userAuthInfo && store.state.userAuthInfo.userName && store.state.userAuthInfo.passWord) {
            this.reqToken(store.state.userAuthInfo.userName, store.state.userAuthInfo.passWord)
            // TODO: 添加请求失败重试机制
        } else {
            console.error(`自动登录失败`)
            // TODO: 跳转到登录页面，更新登录状态
        }
    }

    /** token 是否过期 */
    isTokenExpired(minValidity) {
        // if (!this.tokenParsed || !this.refreshToken) {
        //   throw 'Not authenticated';
        // }

        // if (this.timeSkew == null) {
        //   console.info(
        //     'Unable to determine if token is expired as timeskew is not set'
        //   );
        //   return true;
        // }

        // let expiresIn =
        //   this.tokenParsed['exp'] -
        //   Math.ceil(new Date().getTime() / 1000) +
        //   this.timeSkew;
        // if (minValidity) {
        //   expiresIn -= minValidity;
        // }
        // return expiresIn < 0;
    }


    /***********************************************************************************************************************************/
    /** 辅助功能 */
    /***********************************************************************************************************************************/

    /** 解码 token */
    decodeToken(str) {
        str = str.split('.')[1];

        if (!str) return {};

        str = str.replace('/-/g', '+');
        str = str.replace('/_/g', '/');
        switch (str.length % 4) {
            case 0:
                break;
            case 2:
                str += '==';
                break;
            case 3:
                str += '=';
                break;
            default:
                throw 'Invalid token';
        }

        str = (str + '===').slice(0, str.length + (str.length % 4));
        str = str.replace(/-/g, '+').replace(/_/g, '/');

        str = decodeURIComponent(escape(atob(str)));

        str = JSON.parse(str);
        return str;
    }
    /***********************************************************************************************************************************/
    /******************************************************** 应用 *********************************************************************/
    /***********************************************************************************************************************************/
}