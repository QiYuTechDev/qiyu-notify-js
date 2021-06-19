// 这个文件由 https://code.qiyutech.tech/docs 自动生成
// 请不要使用手工修改
import * as dt from "./dt";


export class ApiPing {

    /**
     * 健康检查
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/ping",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiDdApp {


    /**
     * 添加钉钉推送配置
     */
    public static async do_put<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, dt.DdAppCreateDt>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "PUT",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/app",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


    /**
     * 删除钉钉推送配置
     */
    public static async do_delete<FailureRet = {}>(
        args: GenRequestArgs<{}, { unique_id: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "DELETE",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/app",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiDdAppList {

    /**
     * 获取钉钉APP列表
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, {}>,
        success_cb: (resp: Response) => Promise<dt.DdAppInfoDt[]> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.DdAppInfoDt[] | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/app/list",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiDdAppVerify {


    /**
     * 钉钉配置验证
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, dt.DdAppVerifyDt>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/app/verify",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiDdMsgList {

    /**
     * 获取钉钉APP最新消息列表
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, { unique_id: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<dt.DdMsgDt[]> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.DdMsgDt[] | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/msg/list",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiDdChatwootUniqueId {


    /**
     * 阿里钉钉 Chatwoot WebHook 回调
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, {}, {}, dt.ChatwootWebHookDt>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/chatwoot/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiDdLinkUniqueId {

    /**
     * 发送通知消息
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, { text: string, url: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/link/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiDdRawUniqueId {


    /**
     * 发送通知消息
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, {}, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/raw/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiDdNotifyUniqueId {

    /**
     * 发送通知消息
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, { text: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/notify/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


    /**
     * 发送通知消息
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, {}, {}, dt.NotifyArgs>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/dd/notify/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiEmailApp {


    /**
     * 添加电子邮箱
     */
    public static async do_put<FailureRet = {}>(
        args: GenRequestArgs<{}, { email: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "PUT",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/email/app",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


    /**
     * 删除电子邮箱推送配置
     */
    public static async do_delete<FailureRet = {}>(
        args: GenRequestArgs<{}, { unique_id: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "DELETE",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/email/app",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiEmailAppList {

    /**
     * 获取所有的电子邮箱配置
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, {}>,
        success_cb: (resp: Response) => Promise<dt.EmailAppInfoDt[]> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.EmailAppInfoDt[] | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/email/app/list",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiEmailAppVerify {


    /**
     * 验证电子邮箱
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, dt.EmailVerifyArgs>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/email/app/verify",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiEmailMsgList {

    /**
     * 获取电子邮箱的邮件信息
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, { unique_id: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<dt.EmailMsgDt[]> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.EmailMsgDt[] | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/email/msg/list",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiEmailNotifyUniqueId {

    /**
     * 发送通知消息
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, { text: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/email/notify/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


    /**
     * 发送通知消息
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, {}, {}, dt.NotifyArgs>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/email/notify/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiEmailChatwootUniqueId {


    /**
     * 邮箱 Chatwoot WebHook 回调
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, {}, {}, dt.ChatwootWebHookDt>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/email/chatwoot/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiTplApp {


    /**
     * 创建自定义模版APP
     */
    public static async do_put<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, dt.TplAppCreateDt>,
        success_cb: (resp: Response) => Promise<dt.TplAppInfoDt> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.TplAppInfoDt | FailureRet> {
        return await doRequest({
            method: "PUT",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/tpl/app",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


    /**
     * 删除自定义模版推送配置
     */
    public static async do_delete<FailureRet = {}>(
        args: GenRequestArgs<{}, { unique_id: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "DELETE",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/tpl/app",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiTplAppList {

    /**
     * 获取所有的自定义模版推送的配置
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, {}>,
        success_cb: (resp: Response) => Promise<dt.TplAppInfoDt[]> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.TplAppInfoDt[] | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/tpl/app/list",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiTplNotifyUniqueId {


    /**
     * 发送自定义模版通知消息
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, {}, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/tpl/notify/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiUserToken {

    /**
     * 获取一个新的Token
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, {}>,
        success_cb: (resp: Response) => Promise<dt.UserTokenDt> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.UserTokenDt | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/user/token",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiUserWhoami {

    /**
     * 获取自己的用户名
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, {}>,
        success_cb: (resp: Response) => Promise<dt.UserWhoamiDt> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.UserWhoamiDt | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/user/whoami",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiWxChatwootUniqueId {


    /**
     * 企业微信 Chatwoot WebHook 回调
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, {}, {}, dt.ChatwootWebHookDt>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/wx/chatwoot/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiWxMdUniqueId {


    /**
     * 发送 Markdown 通知消息到企业微信
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, {}, {}, dt.NotifyArgs>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/wx/md/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiWxNotifyUniqueId {

    /**
     * 发送通知消息
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, { text: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/wx/notify/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


    /**
     * 发送通知消息
     */
    public static async do_post<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, {}, {}, dt.NotifyArgs>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "POST",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/wx/notify/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiWxApp {


    /**
     * 添加企业微信推送配置
     */
    public static async do_put<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, dt.WxAppCreateDt>,
        success_cb: (resp: Response) => Promise<dt.WxAppInfoDt> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.WxAppInfoDt | FailureRet> {
        return await doRequest({
            method: "PUT",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/wx/app",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


    /**
     * 删除企业微信配置
     */
    public static async do_delete<FailureRet = {}>(
        args: GenRequestArgs<{}, { unique_id: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "DELETE",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/wx/app",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiWxAppList {

    /**
     * 企业微信配置列表
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, {}, {}, {}>,
        success_cb: (resp: Response) => Promise<dt.WxAppInfoDt[]> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.WxAppInfoDt[] | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/wx/app/list",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiWxVerifyUniqueId {

    /**
     * 企业微信验证
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{ unique_id: string }, { timestamp: string, msg_signature: string, nonce: string, echostr: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<{}> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<{} | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/wx/verify/{unique_id}",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}

export class ApiWxMsgList {

    /**
     * 企业微信消息列表
     */
    public static async do_get<FailureRet = {}>(
        args: GenRequestArgs<{}, { unique_id: string }, {}, {}>,
        success_cb: (resp: Response) => Promise<dt.WxMsgDt[]> = null,
        failure_cb: (resp: Response) => Promise<FailureRet> = null,
    ): Promise<dt.WxMsgDt[] | FailureRet> {
        return await doRequest({
            method: "GET",
            base_url: "https://notify.qiyutech.tech",
            path_url: "/api/wx/msg/list",
            path_args: args.path_args,
            query_args: args.query_args,
            header: args.header,
            body: args.body,
            security: args.security,
        }, success_cb, failure_cb);
    }


}


export interface SecurityParamsType {
    // http bearer 认证
    // MDN: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication
    // RFC: https://datatracker.ietf.org/doc/html/rfc6750#section-2.1
    bearer: string
}


export interface GenRequestArgs<PathParamsType, QueryParamsType, HeaderParamsType, BodyParamsType> {
    path_args: PathParamsType    // path_args with replace path_url with real value
    query_args: QueryParamsType  // query_args
    header: HeaderParamsType     // HTTP request header
    body: BodyParamsType         // HTTP request body
    security?: SecurityParamsType // API Auth method
}

export interface GenRequestParams<PathParamsType, QueryParamsType, HeaderParamsType, BodyParamsType> {
    method: string                // request method GET|PUT|DELETE...
    base_url: string              // base url for server
    path_url: string              // path url may encode with args: {args}
    path_args?: PathParamsType    // path_args with replace path_url with real value
    query_args?: QueryParamsType  // query_args
    header?: HeaderParamsType     // HTTP request header
    body?: BodyParamsType         // HTTP request body
    security?: SecurityParamsType // HTTP auth method
}


async function doRequest<PathParamsType, QueryParamsType, HeaderParamsType, BodyParamsType, SuccessRet, FailureRet = {}>(
    args: GenRequestParams<PathParamsType, QueryParamsType, HeaderParamsType, BodyParamsType>,
    success_cb: (resp: Response) => Promise<SuccessRet> = null,
    failure_cb: (resp: Response) => Promise<FailureRet> = null,
): Promise<SuccessRet | FailureRet | null> {
    function buildUrl() {
        if (!args.path_args) {
            return args.base_url + args.path_url
        }
        const path_url = args.path_url;
        const parts = path_url.split("/")
        const full_path = parts.map((url_part) => {
            if (url_part.startsWith("{") && url_part.endsWith("}")) {
                return args.path_args[url_part.substring(1, url_part.length - 1)]
            } else {
                return url_part
            }
        }).join("/")

        return args.base_url + full_path
    }

    function buildQuery() {
        if (!args.query_args) {
            return "";
        }
        const query = new URLSearchParams(args.query_args as any as Record<string, string>)

        return "?" + query.toString()
    }

    function buildBody(): string | null {
        if (!args.body) {
            return null;
        }
        return JSON.stringify(args.body)
    }

    const url = buildUrl() + buildQuery();
    const header = args.header as any as Record<string, string> || {"Accept-Type": "application/json"}
    const body = buildBody();

    const bearer = args.security?.bearer;
    if (bearer) {
        header["Authorization"] = `Bearer ${bearer}`
    }
    // default use json
    if (body && !header['Content-Type']) {
        header['Content-Type'] = 'application/json';
    }

    const resp = await fetch(url, {method: args.method, headers: header, body: body})
    console.info({url: url, header: header, body: body, resp: resp})

    if (resp.ok) {
        if (success_cb) {
            return await success_cb(resp)
        } else {
            return await resp.json() as SuccessRet;
        }
    } else {
        if (failure_cb) {
            return await failure_cb(resp)
        } else { // do nothing
            return null;
        }
    }
}

