const ADMIN_ROLE = 1
const BASE_ROLE = 0

export function oAuthAdmin (req, res, next) {
    if (req.session.isLogin) {
        const t_role = req.session.userInfo.userRole
        if (t_role === ADMIN_ROLE) {
            next()
        } else {
            res.send({
                status: false,
                msg: '权限不足'
            })
        }
    } else {
        res.send({
            status: false,
            msg: '请登录！'
        })
    }
}

export function oAuthBase (req, res, next) {
    if (req.session.isLogin) {
        const t_role = req.session.userInfo.userRole

        if (t_role === BASE_ROLE) {
            next()
        } else {
            res.send({
                status: false,
                msg: '权限不足'
            })
        }
    } else {
        res.send({
            status: false,
            msg: '请登录！'
        })
    }
}