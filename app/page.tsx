export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* Logo */}
      <img src="/logo.svg" alt="StarBoost" className="h-14 mb-8" />

      {/* Titre accrocheur */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        Gérez le marketing local&nbsp;
        <br className="hidden md:block" />
        de <span className="text-brand-500">toutes vos franchises</span>
      </h1>

      {/* Petit pitch */}
      <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
        StarBoost-SaaS centralise avis Google, données locales et campagnes
        dans un tableau de bord unique.
      </p>

      {/* Bouton vers la page de connexion */}
      <a
        href="/auth/signin"
        className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg shadow transition"
      >
        Se connecter
      </a>
    </main>
  );
}

