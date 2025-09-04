

// Mentor's Path component card
export default function MentorsPathCard (){
    return (
      <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Mentor's Path
          </h3>
          <span className="text-xs text-white bg-red-700 px-2 py-0.5 rounded-full -translate-y-0.5">
            Legacy
          </span>
          {/* Span2~ Badge 2 */}
          <span className="text-xs text-white bg-gray-800 px-2 py-0.5 rounded-full -translate-y-0.5">
            Community
          </span>
        </div>
        <p className="text-gray-700 text-base mb-2">
          In the Crenshaw area of South LA, a clothing store rooted in legacy
          mentors youth and provides work for formerly incarcerated community
          members-offering whole paths with dignity.
        </p>
        <p className="text-sm text-gray-500">
          MpatiQ recognizes <em>Community Integrity</em>,{' '}
          <em>Redemptive Growth</em>.
        </p>
      </div>
    );
}