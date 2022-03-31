import Icon from "@mdi/react";
import { mdiStar, mdiStarOutline } from "@mdi/js";
const Rating = ({ rating }) => {
  return (
    <div style={styles.container}>
      {Array(rating)
        .fill(0)
        .map((e, i) => {
          return <Icon key={i} path={mdiStar} size={0.8} color="orange" />;
        })}
      {Array(5 - rating)
        .fill(0)
        .map((e, i) => {
          return (
            <Icon key={i} path={mdiStarOutline} size={0.8} color="orange" />
          );
        })}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
  },
};

export default Rating;
