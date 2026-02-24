import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Pegue o cabeçalho de autorização da requisição
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  // Defina o seu usuário e senha aqui (O ideal é usar variáveis de ambiente)
  const USERNAME = process.env.BASIC_AUTH_USER;
  const PASSWORD = process.env.BASIC_AUTH_PASSWORD;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // Se o usuário e a senha estiverem corretos, permita o acesso
    if (user === USERNAME && pwd === PASSWORD) {
      return NextResponse.next();
    }
  }

  // Se não houver autenticação ou se as credenciais estiverem erradas, peça a senha
  url.pathname = '/api/auth';
  return new NextResponse('Autenticação necessária', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// Defina em quais rotas o middleware deve rodar
export const config = {
  matcher: [
    /*
     * Aplica o password a todas as rotas (inclusive a página inicial), mas ignora
     * arquivos estáticos (imagens, arquivos na pasta public, _next/static, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
