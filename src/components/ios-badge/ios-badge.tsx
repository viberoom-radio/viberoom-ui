import { Button } from "../button";
import { IosBadgetIcon } from "./components/ios-badge-icon";
import { Props } from "./types";

export const IosBadge = ({ url }: Props) => (
  <Button href={url} isPlain color="transparent" icon={<IosBadgetIcon />} />
);
