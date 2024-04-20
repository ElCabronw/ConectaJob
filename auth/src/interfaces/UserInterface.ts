interface UserInterface {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    created_at?: Date;
    updated_at?: Date | null;
    deleted_at?: Date | null;
    active?: boolean;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    cpf: string;
    cnpj: string;
    birthdate: Date;
}

export { UserInterface };
