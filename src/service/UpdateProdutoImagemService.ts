import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import AppError from '../error/AppErro'
import uploadConfig from '../config/upload';
import Produto from '../models/produtos'


