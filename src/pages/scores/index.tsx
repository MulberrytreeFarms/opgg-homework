import UserProfile from '@/components/userProfile'
import { ScoreBodyStyle } from '@/layouts/style'

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

      <ScoreBodyStyle>
        <div className="left-wrapper">Left wrapper</div>
        <div className="right-wrapper">Right wrapper</div>
      </ScoreBodyStyle>
    </div>
  )
}

export default ScorePage
