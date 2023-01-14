import ChampionRankList from '@/components/championRankList'
import Tab from '@/components/tab'
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
        <div className="left-wrapper">
          <Tab>
            <Tab.Header>
              <Tab.Item idx={0}>챔피언 승률</Tab.Item>
              <Tab.Item idx={1}>7일간 랭킹 승률</Tab.Item>
            </Tab.Header>

            <Tab.Content idx={0}>
              <ChampionRankList>
                <ChampionRankList.Item>
                  <ChampionRankList.Pick>awef</ChampionRankList.Pick>
                  <ChampionRankList.Rate />
                  <ChampionRankList.Average />
                </ChampionRankList.Item>
                <ChampionRankList.Item>
                  <ChampionRankList.Pick>awef</ChampionRankList.Pick>
                  <ChampionRankList.Rate />
                  <ChampionRankList.Average />
                </ChampionRankList.Item>
              </ChampionRankList>
            </Tab.Content>
          </Tab>
        </div>
        <div className="right-wrapper">Right wrapper</div>
      </ScoreBodyStyle>
    </div>
  )
}

export default ScorePage
