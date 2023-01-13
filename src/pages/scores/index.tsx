import UserProfile from '@/components/userProfile'

const ScorePage = () => {
  return (
    <div>
      <UserProfile>
        <UserProfile.TierHistory>ul li li li ul</UserProfile.TierHistory>
        <UserProfile.Info>
          <UserProfile.Thumbnail>userInfo</UserProfile.Thumbnail>
          <div>
            <h2>userNickname</h2>
            <p>
              레더 랭킹 <strong>3000000</strong>위 <span>(상위 40.7%)</span>
            </p>
          </div>
        </UserProfile.Info>
      </UserProfile>
    </div>
  )
}

export default ScorePage
