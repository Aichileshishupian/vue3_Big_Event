import request from '@/utils/requests'

// 注册接口
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

// 登录接口
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })

// 获取用户信息接口
export const userGetInfoService = () => request.get('/my/userinfo')

// 更新用户信息接口
export const userUpdateInfoService = ({ id, username, nickname, email }) =>
  request.put('/my/userinfo', { id, username, nickname, email })

// 上传用户头像接口
export const userUploadAvatarService = (avatar) => request.patch('/my/update/avatar', { avatar })

// 更新用户密码接口
export const userUpdatePassService = ({ old_pwd, new_pwd, re_pwd }) =>
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
