'use client'

import Header from "./(components)/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-amber-900">
        <div className="min-h-screen flex flex-col">
          <Header/>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}

// return (
//     <html lang="ru">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com"/>
//         <link rel="preconnect" href="https://fonts.gstatic.com"/>
//         <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
//       </head>
//       <body className="bg-gray-50">
//         <div className="min-h-screen flex flex-col">

//         </div>
//       </body>
//     </html>
//   );