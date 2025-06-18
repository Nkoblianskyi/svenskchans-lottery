export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Integritetspolicy</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Inledning</h2>
            <p className="mb-6 text-gray-700">
              Svensk Chans ("vi", "oss", "vårt") respekterar din integritet och är engagerade i att skydda dina
              personuppgifter. Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar din information
              när du använder vår tjänst.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information Vi Samlar In</h2>
            <p className="mb-4 text-gray-700">Vi kan samla in följande typer av information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Personlig identifieringsinformation (namn, e-postadress, telefonnummer)</li>
              <li>Kontoinformation och inloggningsuppgifter</li>
              <li>Användningsdata och webbplatsaktivitet</li>
              <li>Enhetsinformation och IP-adresser</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Hur Vi Använder Din Information</h2>
            <p className="mb-4 text-gray-700">Vi använder din information för att:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Tillhandahålla och underhålla vår tjänst</li>
              <li>Bearbeta dina förfrågningar och transaktioner</li>
              <li>Skicka dig viktiga meddelanden och uppdateringar</li>
              <li>Förbättra vår webbplats och tjänster</li>
              <li>Följa juridiska krav och föreskrifter</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Dataskydd</h2>
            <p className="mb-6 text-gray-700">
              Vi implementerar lämpliga säkerhetsåtgärder för att skydda din personliga information mot obehörig
              åtkomst, ändring, avslöjande eller förstörelse. Detta inkluderar kryptering, säkra servrar och regelbundna
              säkerhetsgranskningar.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Dina Rättigheter</h2>
            <p className="mb-4 text-gray-700">Under GDPR har du rätt att:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Få tillgång till dina personuppgifter</li>
              <li>Rätta felaktig information</li>
              <li>Radera dina personuppgifter</li>
              <li>Begränsa behandlingen av dina uppgifter</li>
              <li>Dataportabilitet</li>
              <li>Invända mot behandling</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies</h2>
            <p className="mb-6 text-gray-700">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. Du kan kontrollera användningen av
              cookies genom dina webbläsarinställningar.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Ändringar av Policyn</h2>
            <p className="mb-6 text-gray-700">
              Vi kan uppdatera denna integritetspolicy från tid till annan. Vi kommer att meddela dig om eventuella
              ändringar genom att publicera den nya integritetspolicyn på denna sida.
            </p>

            <p className="mt-8 text-sm text-gray-600">Senast uppdaterad: 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
