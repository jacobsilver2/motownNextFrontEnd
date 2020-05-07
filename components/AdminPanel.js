import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import ButtonComponent from "./Button";
// import { CURRENT_USER_QUERY } from "./Nav";

export const Center = styled.div`
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminPanelWrapper = styled.div`
  border-top: 10px solid ${(props) => props.theme.black};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: stretch;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: 150px;
  overflow: scroll;
`;

export const SelectedItemsList = styled.ul`
  /* align-self: flex-start; */
`;

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
    }
  }
`;

export const LOCAL_STATE_QUERY = gql`
  query {
    selectedIds @client
  }
`;

const TURN_SINGLE_INTO_ALBUM_MUTATION = gql`
  mutation TURN_SINGLE_INTO_ALBUM_MUTATION($id: ID!) {
    turnSingleIntoAlbum(id: $id) {
      id
      title
      single
    }
  }
`;

const JOIN_SINGLES_MUTATION = gql`
  mutation JOIN_SINGLES_MUTATION($albumOneId: ID!, $albumTwoId: ID!) {
    joinTwoSingles(albumOneId: $albumOneId, albumTwoId: $albumTwoId) {
      id
      title
    }
  }
`;

const CLEAR_SELECTED_IDS = gql`
  mutation {
    clearSelectedIds @client
  }
`;

const AdminPanel = () => {
  const [
    turnSingleIntoAlbumMutation,
    { loading: turnSingleIntoAlbumLoading, error: turnSingleIntoAlbumError },
  ] = useMutation(TURN_SINGLE_INTO_ALBUM_MUTATION);

  const [
    joinTwoSinglesMutation,
    { loading: joinTwoSinglesLoading, error: joinTwoSinglesError },
  ] = useMutation(JOIN_SINGLES_MUTATION);

  const [
    clearSelectedIdsMutation,
    { loading: clearSelectedIdsLoading, error: clearSelectedIdsError },
  ] = useMutation(CLEAR_SELECTED_IDS);

  async function turnSingleIntoAlbum() {
    turnSingleIntoAlbumMutation({
      variables: { id: localStateData.selectedIds[0] },
    });
    turnSingleIntoAlbumError && console.log(turnSingleIntoAlbumError);
    clearSelectedIdsMutation();
  }

  async function joinASideAndBSide() {
    joinTwoSinglesMutation({
      variables: {
        albumOneId: localStateData.selectedIds[0],
        albumTwoId: localStateData.selectedIds[1],
      },
    });
    joinTwoSinglesError && console.log(joinTwoSinglesError);
    clearSelectedIdsMutation();
  }

  const {
    loading: currentUserLoading,
    error: currentUserError,
    data: currentUserData,
  } = useQuery(CURRENT_USER_QUERY);

  const {
    loading: localStateLoading,
    error: localStateError,
    data: localStateData,
  } = useQuery(LOCAL_STATE_QUERY);

  if (currentUserLoading) return "Loading...";
  if (currentUserError) return `Error! ${error.message}`;
  const { me } = currentUserData;
  return (
    me && (
      <>
        <AdminPanelWrapper>
          {/* {localStateData.selectedIds.length > 0 && (
            <SelectedItemsList>
              <p>Selected Items:</p>
              {localStateData.selectedIds.map((selectedId) => (
                <li key={selectedId}>{selectedId}</li>
              ))}
            </SelectedItemsList>
          )} */}
          <ButtonComponent
            marginTop="20px"
            marginBottom="20px"
            marginLeft="20px"
            marginRight="20px"
            buttonSize="large"
            onClick={turnSingleIntoAlbum}
          >
            Turn Single Into Album
          </ButtonComponent>
          <ButtonComponent
            marginTop="20px"
            marginBottom="20px"
            marginLeft="20px"
            marginRight="20px"
            onClick={turnSingleIntoAlbum}
            buttonStyle="danger"
            buttonSize="large"
          >
            Clear Selected Items
          </ButtonComponent>
          <ButtonComponent
            marginTop="20px"
            marginBottom="20px"
            marginLeft="20px"
            marginRight="20px"
            buttonSize="large"
            onClick={joinASideAndBSide}
          >
            Join A-Side and B-Side
          </ButtonComponent>
        </AdminPanelWrapper>
      </>
    )
  );
};

export default AdminPanel;
