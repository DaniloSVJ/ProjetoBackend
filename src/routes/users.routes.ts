
// import { response, Router} from "express"
// import CreateUserService from '../service/CreateUserService'
// import UpdateUserAvatarService from '../service/UpdateUserAvatarService'
// import multer from 'multer'

// import uploadConfig from "../config/upload"
// const userRoutes = Router()
// const upload = multer(uploadConfig)
// //const appointments:Appointment[] = []
// import ensureAuthenticated from '../middlewares/ensureAuthenticated'
// userRoutes.post('/', async (request,response)=>{

//         const{name,email,password} = request.body

//         const createUser = new CreateUserService();

//         const user = await createUser.execute({
//             name,
//             email,
//             password,
//         })

//         //delete user.email

//         return response.json(user )


// })

// userRoutes.patch('/imagemPruduto',ensureAuthenticated,upload.single('produto'),async(request,response)=>{

//         const updateUserAvatar = new UpdateUserAvatarService();

//         const user=  await updateUserAvatar.execute({
//             user_id:request.user.id,
//             avatarFilename:request.file.filename
//         })
//         const userWithoutPassword = {
//             id: user.id,
//             name: user.name,
//             email: user.email,
//             created_at: user.created_at,
//             updated_at: user.updated_at,
//           };

//           return response.json(userWithoutPassword);


// })

// export default userRoutes;

