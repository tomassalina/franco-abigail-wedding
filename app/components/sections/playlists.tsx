import { SpotifyIcon, YoutubeIcon } from "@/components/icons";

export default function PlaylistsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-19 h-19 mb-4 rounded-full bg-icon flex items-center justify-center">
          <SpotifyIcon />
        </div>
        <h3 className="mb-2 font-playfair text-3xl font-medium">
          Nuestra Playlist Spotify
        </h3>
        <p className="text-base mb-4">
          Agregá a nuestra playlist y recomendá las canciones que no pueden
          faltar en nuestra boda
        </p>
        <a
          href="https://open.spotify.com/playlist/64TxWVP0b7Zp8yvNtYHIyk?si=62104b0a79524d1f"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-2 bg-[#EFEEEE] uppercase rounded-2xl"
        >
          Ir a Spotify
        </a>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-19 h-19 mb-4 rounded-full bg-icon flex items-center justify-center">
          <YoutubeIcon />
        </div>
        <h3 className="mb-2 font-playfair text-3xl font-medium">
          Nuestra Playlist Youtube
        </h3>
        <p className="text-base mb-4">
          Agregá a nuestra playlist y recomendá las canciones que no pueden
          faltar en nuestra boda
        </p>
        <a
          href="https://www.youtube.com/playlist?list=PLE3v_7V4d8NLGqd8iVj7ZFeJDaJBl15-T&jct=NQd1NtbZ1NGeXUTElpvQNg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-2 bg-[#EFEEEE] uppercase rounded-2xl"
        >
          Ir a YouTube
        </a>
      </div>
    </div>
  );
}
