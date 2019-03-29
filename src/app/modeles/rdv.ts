import { User } from './user';

export class Rdv {
    id?: number;
    date_rdv: string;
    heure_rdv: number;
    user?: User;
    userId: number;
}
//toto? -> param optionnel