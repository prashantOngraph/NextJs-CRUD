import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import classes from "./main-header.module.css";

function MainHeader() {
  const { data: session, status } = useSession();
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href="/">Next Event</Link>
        </div>
        <nav className={classes.navigation}>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <li>
              <Link href="/events"> Browse All Events</Link>
            </li>
            {session && (
              <li>
                <Link href="/events/create-event"> Create an Event</Link>
              </li>
            )}
            {(status === "loading" || status === "unauthenticated") && (
              <li>
                <Link href="/api/auth/signin">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("github");
                    }}
                  >
                    Sign In
                  </a>
                </Link>
              </li>
            )}
            {session && (
              <li>
                <Link href="/api/auth/signout">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign Out
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
