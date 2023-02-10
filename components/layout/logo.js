import Image from "next/image";

import classes from "./logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      {/* <Image
        src="/images/site/logo.png"
        alt="Page Logo"
        width={433 / 4}
        height={74 / 4}
      /> */}
      Fer's Next Blog
    </div>
  );
};

export default Logo;
