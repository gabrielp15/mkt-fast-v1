import { NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const url = req.nextUrl;

  // Como estamos apenas em versão de Lançamento (Landing Page),
  // qualquer tentativa de acesso direto a essas rotas será barrada e redirecionada à Home.
  const blockedRoutes = ['/login', '/register', '/exclusao-solicitada'];
  if (blockedRoutes.some(route => url.pathname.startsWith(route)) || url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
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
