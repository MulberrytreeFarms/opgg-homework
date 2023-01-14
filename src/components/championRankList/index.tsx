import { ChampionRankListItemStyle, ChampionRankListPickStyle } from './style'

const ChampionRankList = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>
}

const ChampionRankListItem = ({ children }: { children: React.ReactNode }) => {
  return <ChampionRankListItemStyle>{children}</ChampionRankListItemStyle>
}

const ChampionRankListPick = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChampionRankListPickStyle>
      <figure>
        <figcaption>champion</figcaption>
      </figure>
      <div>
        <p className="tit">championName</p>
        <p>CS 67.8 (2.4)</p>
      </div>
    </ChampionRankListPickStyle>
  )
}

const ChampionRankListRate = ({
  rate = 0,
  k = 0,
  d = 0,
  a = 0,
}: {
  rate?: number
  k?: number
  d?: number
  a?: number
}) => {
  return (
    <div>
      <p className="tit">{rate}</p>
      <p>
        <span>{k}</span> /<span>{d}</span> /<span>{a}</span>
      </p>
    </div>
  )
}

const ChampionRankListAverage = ({
  average = 0,
  totalGames = 0,
}: {
  average?: number
  totalGames?: number
}) => {
  return (
    <div>
      <p className="tit">{average}</p>
      <p>{totalGames}</p>
    </div>
  )
}

ChampionRankList.Item = ChampionRankListItem
ChampionRankList.Pick = ChampionRankListPick
ChampionRankList.Rate = ChampionRankListRate
ChampionRankList.Average = ChampionRankListAverage

export default ChampionRankList
