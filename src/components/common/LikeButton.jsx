import React from "react";

// Interface
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AwesomeButton } from "react-awesome-button";

export function LikeButton({ onLike, onUnlike, liked, likeCount }) {
  return (
    <>
      <span className="mx-2 my-auto">{likeCount}</span>
      {liked ? (
        <AwesomeButton type="primary" size="icon" onPress={onUnlike}>
          <FontAwesomeIcon icon="thumbs-up" />
        </AwesomeButton>
      ) : (
        <AwesomeButton type="primary" size="icon" onPress={onLike}>
          <FontAwesomeIcon icon={["far", "thumbs-up"]} />
        </AwesomeButton>
      )}
    </>
  );
}
