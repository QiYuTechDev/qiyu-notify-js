// 这个文件由 https://code.qiyutech.tech/docs 自动生成
// 请不要使用手工修改

export interface DdAppCreateDt {
    app_name: string /* 应用名称 */
    dd_ak: string /* 钉钉访问令牌 */
    dd_sk?: string /* 钉钉加密密钥 */
}

export interface DdAppInfoDt {
    unique_id: string /* 唯一标识 */
    app_name: string /* 应用名称 */
    dd_ak: string /* 钉钉访问令牌 */
    dd_sk?: string /* 钉钉加密密钥 */
    verified: boolean /* 已验证 */
    ctime: string /* 创建时间 */
}

export interface DdAppVerifyDt {
    unique_id: string /* 唯一标识 */
    code: string /* 验证码 */
}

export interface DdMsgDt {
    src_ip: string /* 来源IP */
    msg_type: string /* 消息类型 */
    content: string /* 消息内容 */
    ctime: string /* 发送时间 */
}

export interface ChatwootSenderDt {
    id?: string /* 发送者ID */
    name?: string /* 发送者的名称 */
    email?: string /* 电子邮箱 */
}

export interface ChatwootContactDt {
    id?: string /* 联系人ID */
    name?: string /* 联系人名称 */
}

export interface ChatwootConversationDt {
    display_id?: string /* Display Id */
    additional_attributes?: object /* 其他属性 */
}

export interface ChatwootAccountDt {
    id?: string /* 账号ID */
    name?: string /* 账号名称 */
}

export interface ChatwootWebHookDt {
    event: string /* 事件名称 */
    id: string /* 消息ID */
    content: string /* 消息内容 */
    created_at: string /* 发送时间 */
    message_type: string /* 消息类型 */
    content_type: string /* 内容类型 */
    content_attributes?: object /* 内容属性 */
    source_id?: string /* 来源ID */
    sender?: ChatwootSenderDt /* 发送者 */
    contact?: ChatwootContactDt /* 联系人 */
    conversation?: ChatwootConversationDt /* 会话信息 */
    account?: ChatwootAccountDt /* 账号信息 */
}

export interface NotifyArgs {
    content: string /* 通知内容 */
}

export interface EmailAppInfoDt {
    unique_id: string /* 唯一标识 */
    notify_email: string /* 推送接收邮箱 */
    verified: boolean /* 是否验证 */
    ctime: string /* 创建时间 */
}

export interface EmailVerifyArgs {
    unique_id: string /* 唯一标识 */
    code: string /* 验证码 */
}

export interface EmailMsgDt {
    src_ip: string /* 来源IP */
    msg_type: string /* 消息类型 */
    content: string /* 消息内容 */
    ctime: string /* 发送时间 */
}

export interface WxAppInfoDt {
    unique_id: string /* 唯一标识 */
    app_name: string /* 应用名称 */
    corp_id: string /* 企业微信 -> 公司ID */
    wx_token: string /* 企业微信 -> 微信令牌 */
    aes_key: string /* 企业微信 -> AES密钥 */
    agent_id: number /* 企业微信 -> AgentID */
    secret: string /* 企业微信 -> Secret */
    verified: boolean /* 已验证 */
    verify_time?: string /* 验证时间 */
    ctime: string /* 创建时间 */
}

export interface TplAppInfoDt {
    unique_id: string /* 唯一标识 */
    app_name: string /* 模版应用名称 */
    tpl_code: string /* 模版 */
    comment: string /* 用备注 */
    wx_app?: WxAppInfoDt /* 微信应用信息 */
    email_app?: EmailAppInfoDt /* 邮箱应用信息 */
    dd_app?: DdAppInfoDt /* 钉钉应用信息 */
    ctime: string /* 创建时间 */
}

export interface TplAppCreateDt {
    app_name: string /* 模版应用名称 */
    wx_app?: string /* 微信应用UUID */
    dd_app?: string /* 钉钉应用UUID */
    email_app?: string /* 邮箱应用UUID */
    tpl_code: string /* 模版 */
    comment: string /* 用备注 */
}

export interface TplAppUpdateDt {
    app_name: string /* 模版应用名称 */
    wx_app?: string /* 微信应用UUID */
    dd_app?: string /* 钉钉应用UUID */
    email_app?: string /* 邮箱应用UUID */
    tpl_code: string /* 模版 */
    comment: string /* 用备注 */
    unique_id: string /* 唯一标识 */
}

export interface UserTokenDt {
    token: string /* token */
}

export interface UserWhoamiDt {
    username?: string /* 用户的名称 */
}

export interface WxAppCreateDt {
    app_name: string /* 应用名称 */
    corp_id: string /* 企业微信 -> 公司ID */
    wx_token: string /* 企业微信 -> 微信令牌 */
    aes_key: string /* 企业微信 -> AES密钥 */
    agent_id: number /* 企业微信 -> AgentID */
    secret: string /* 企业微信 -> Secret */
}

export interface WxMsgDt {
    src_ip: string /* IP */
    msg_type: string /* 消息类型 */
    content: string /* 消息内容 */
    ctime: string /* 发送时间 */
}

