export async function GET(request: Request) {

    return new Response(' Hello, World!', {
        status: 200,
        headers: {
            'Set-Cookie': `token="hello-world"`
        }
    })
}