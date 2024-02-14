import styled, {css} from "styled-components";

const ProfileListStyle = styled.li`
  word-break: unset;

  position: relative;
  padding-left: 24px;

  &::before {
    content: "";
    width: 17px;
    height: 17px;

    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${p => p.icon});
    background-size: cover;
  }

  h3 {
    color: ${p => p.theme.color.Gray9};
    font-weight: 500;
    font-size: 1.3em;

    display: inline-block;
  }

  .date {
    color: ${p => p.theme.color.Gray6};
    font-size: 1em;

    margin-left: 6px;
  }

  .description-wrap {
    color: ${p => p.theme.color.Gray7};

    margin-top: 6px;
    font-size: 1.25em;

    line-height: 22px;
  }

  a {
    color: ${p => p.theme.color.HeechanBlue};
    font-weight: 500;
    transition: 100ms;
  }

  a:hover {
    text-decoration: underline;
  }
`

const ProfileList = ({profile}) => {
  return (
    <ProfileListStyle icon={profile.icon}>
      <div className="title-wrap">
        <h3>{profile.title}</h3>
        <span className="date">{profile.date}</span>
      </div>
      <div className="description-wrap">
        {profile.description}
      </div>
    </ProfileListStyle>
  )
}

export {ProfileList}