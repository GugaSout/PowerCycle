import { TipoUsuario } from "@/types";
import { promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function GET(){

    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const usuarios = JSON.parse(file);

    return NextResponse.json(usuarios);

}

export async function POST(request:Request){
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8')
    const data = JSON.parse(file)
    const {nome,email,cpf,dataNascimento,senha} = await request.json()
    const usuario = {nome, email, cpf, dataNascimento, senha} as TipoUsuario
    usuario.id = Number(Date.now())
    data.push(usuario)
    const json = JSON.stringify(data)
    await fs.writeFile(process.cwd() + '/src/data/base.json', json)

    return NextResponse.json(usuario)
}

