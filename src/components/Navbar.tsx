import { useEffect, useRef, useState } from "react";
export default function Navbar() {
  const [profile, setProfile] = useState<boolean>(false);
  const profileRef = useRef<HTMLImageElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  const menus: string[] = ["settings", "dashbaord", "privacy", "logout"];

  const closeWhenClickedOnBody = (e: any) => {
    if (e.target !== profileRef.current && e.target !== divRef.current) {
      setProfile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", closeWhenClickedOnBody);

    return () => window.removeEventListener("click", closeWhenClickedOnBody);
  }, []);

  return (
    <div>
      <header>
        <li>
          <span>Home</span>
        </li>
        <div ref={divRef} onClick={() => setProfile(!profile)}>
          <img
            ref={profileRef}
            src="data:image/jpeg;base64,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"
            alt="Nabin-saud"
          />

          {profile && (
            <div className="profileOptions">
              {menus.map((menu: string, menuIndex: number) => (
                <li key={menuIndex}>{menu}</li>
              ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
