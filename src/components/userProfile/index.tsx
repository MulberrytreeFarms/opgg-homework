import {
  UserProfileHistoryStyle,
  UserProfileInfoStyle,
  UserProfileStyle,
  UserProfileThumbnailStyle,
} from './style'

const UserProfile = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProfileStyle>
      <div>{children}</div>
    </UserProfileStyle>
  )
}

const UserProfileTierHistory = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <UserProfileHistoryStyle>{children}</UserProfileHistoryStyle>
}

const UserProfileInfo = ({ children }: { children: React.ReactNode }) => {
  return <UserProfileInfoStyle>{children}</UserProfileInfoStyle>
}

const UserProfileThumbnail = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProfileThumbnailStyle>
      <figure>
        {children}
        <figcaption>32</figcaption>
      </figure>
    </UserProfileThumbnailStyle>
  )
}

UserProfile.TierHistory = UserProfileTierHistory
UserProfile.Info = UserProfileInfo
UserProfile.Thumbnail = UserProfileThumbnail

export default UserProfile
