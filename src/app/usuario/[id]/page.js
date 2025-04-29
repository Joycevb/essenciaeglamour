import db from "@/lib/db";

export default async ({params}) => {
    const usuarios = await db.query(
        "select * from usuario where id = "+params.id
    );
    return (
        <>
            <h1>Página do usuário: 
                {usuarios.rows[0].nome}
            </h1>
            <p>O usuario faz parte do projeto 
                {usuarios.rows[0].cargo}
            </p>
        </>
    )
}
