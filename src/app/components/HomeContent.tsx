/**
 * HomeContent — Server-rendered informational content.
 * This adds substantive, citable text for AI search engines
 * (GEO: Generative Engine Optimization).
 */

const publishDate = "2024-08-15T00:00:00.000Z";
const modifiedDate = "2026-08-10T00:00:00.000Z";

export default function HomeContent() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 space-y-14">
      {/* ---- Section 1: What Are Composition Grids? ---- */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          What Are Composition Grids in Photography?
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed space-y-3">
          Composition grids are visual overlays that guide how you frame and
          crop a photo. They help position the subject, balance negative space,
          and create visually harmonious images. The most widely used grids
          include the Rule of Thirds, Golden Ratio, Golden Spiral, Diagonal
          Method, Triangle composition, Center Cross, Symmetry lines, and
          Leading Lines.
        </p>
        <p className="text-sm text-zinc-400 leading-relaxed mt-3">
          Each grid serves a different creative purpose — from creating dynamic
          tension with diagonals to achieving calm balance with symmetry. By
          overlaying these guides on your image, you can make intentional
          cropping decisions that elevate an ordinary snapshot into a
          well-composed photograph.
        </p>
      </div>

      {/* ---- Section 2: Why Crop Online? ---- */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          Why Crop Images Online Instead of Desktop Software?
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          An online image cropper lets you start working immediately — no
          download, no installation, no sign-up. CropImageArt processes
          everything locally in your browser using the Canvas API and
          FileReader. Your photos never leave your device. This means your
          images stay completely private while you benefit from professional
          composition tools that used to require expensive software.
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-zinc-400">
          <li>
            <span className="text-zinc-300 font-medium">Instant access</span> —
            open the site and start cropping.
          </li>
          <li>
            <span className="text-zinc-300 font-medium">100% private</span> —
            no uploads, your images stay on your device.
          </li>
          <li>
            <span className="text-zinc-300 font-medium">8 composition overlays</span> —
            from Rule of Thirds to Leading Lines.
          </li>
          <li>
            <span className="text-zinc-300 font-medium">9 aspect ratio presets</span> —
            for Instagram, YouTube thumbnails, LinkedIn, print, and more.
          </li>
        </ul>
      </div>

      {/* ---- Section 3: How to Use Rule of Thirds ---- */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          How to Use the Rule of Thirds for Better Photo Cropping?
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          The Rule of Thirds divides an image into nine equal parts using two
          horizontal and two vertical lines. Placing key subjects along these
          lines — or at their intersections — creates more engaging and balanced
          compositions than centering the subject.
        </p>
        <blockquote className="mt-3 border-l-2 border-purple-500/40 pl-4 text-sm text-zinc-500 italic leading-relaxed">
          &ldquo;There are no rules for good photographs, there are only good
          photographs.&rdquo; —{' '}
          <span className="text-zinc-400 not-italic">Ansel Adams</span>
        </blockquote>
        <p className="text-sm text-zinc-400 leading-relaxed mt-3">
          While Adams reminded us that rules can be broken, the Rule of Thirds
          provides a reliable starting point. CropImageArt&apos;s overlay makes
          it easy to see exactly where your subject falls and adjust the crop
          accordingly.
        </p>
      </div>

      {/* ---- Section 4: The Golden Ratio in Photography ---- */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          What Is the Golden Ratio and When Should You Use It?
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          The Golden Ratio (approximately 1.618:1) has been used by artists and
          architects for centuries. In photography, the Golden Ratio grid places
          intersecting lines at phi-based positions — often perceived as more
          naturally pleasing than the Rule of Thirds. The related Golden Spiral
          overlay is ideal for images with flowing, organic subjects such as
          landscapes, portraits, and nature shots.
        </p>
        <blockquote className="mt-3 border-l-2 border-purple-500/40 pl-4 text-sm text-zinc-500 italic leading-relaxed">
          &ldquo;The golden ratio is a reminder that math and art are not
          opposites — they are collaborators.&rdquo; —{' '}
          <span className="text-zinc-400 not-italic">John Brownlee</span>,{' '}
          <cite className="not-italic">Fast Company</cite>
        </blockquote>
      </div>

      {/* ---- Section 5: All 8 Grids Explained ---- */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          Which Composition Grid Should I Choose for My Photo?
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          CropImageArt includes eight composition grids. Here is when to use
          each one:
        </p>
        <div className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-zinc-400">
          <div><span className="text-zinc-300 font-medium">Rule of Thirds</span> — general purpose, portraits, landscapes</div>
          <div><span className="text-zinc-300 font-medium">Golden Ratio</span> — fine-art photography, editorial crops</div>
          <div><span className="text-zinc-300 font-medium">Golden Spiral</span> — nature, macros, flowing compositions</div>
          <div><span className="text-zinc-300 font-medium">Diagonal Method</span> — dynamic, high-energy scenes</div>
          <div><span className="text-zinc-300 font-medium">Triangle</span> — group shots, stable three-point layouts</div>
          <div><span className="text-zinc-300 font-medium">Center Cross</span> — symmetrical subjects, product photos</div>
          <div><span className="text-zinc-300 font-medium">Symmetry</span> — architecture, reflections, formal portraits</div>
          <div><span className="text-zinc-300 font-medium">Leading Lines</span> — roads, rivers, vanishing-point shots</div>
        </div>
      </div>

      {/* ---- Section 6: Privacy ---- */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          Is It Safe to Crop Images Online?
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Yes — when you use a tool that processes images locally. CropImageArt
          uses your browser&apos;s built-in Canvas API and FileReader. Your
          photos are never transmitted to a server. Unlike many online editors,
          we do not require account creation, collect personal data, or store
          your images. You can verify this by disconnecting your internet after
          loading the page — everything will continue to work.
        </p>
        <p className="text-sm text-zinc-400 leading-relaxed mt-3">
          <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
            Read our Privacy Policy
          </a>
          {' '}for full details on data handling.
        </p>
      </div>

      {/* Machine-readable dates for AI crawlers */}
      <time dateTime={publishDate} className="hidden" aria-hidden="true">
        Published: {new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>
      <time dateTime={modifiedDate} className="hidden" aria-hidden="true">
        Updated: {new Date(modifiedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>
    </section>
  );
}
