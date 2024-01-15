import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
    createUser(user: CreateUserDto): Promise<User>;
    getUser(id: string): Promise<User>;
    updateUser(id: string, user: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
