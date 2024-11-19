import { gql } from "@apollo/client";

export const GET_POOLS = gql`
  query {
    idopoolCreateds (
      orderBy: _timeInfo_startTime,
      orderDirection: desc
    ){
      id
      idoPool
      owner
      saleTokenAddress
      buyTokenAddress
      _saleTokenInfo_symbol
      _saleTokenInfo_name
      _saleTokenInfo_initialSupply
      _saleTokenInfo_metaData
      _saleTokenInfo_description
      _saleInfo_tokenPrice
      _saleInfo_softCap
      _saleInfo_hardCap
      _saleInfo_listingPrice
      _timeInfo_startTime
      _timeInfo_endTime
      _timeInfo_claimTime
    }
  }
`;

const currentTime = new Date().getTime();

export const GET_UPCOMING_POOLS = gql`
  query {
    idopoolCreateds(
      where: { _timeInfo_startTime_gt: "${currentTime}" },
      orderBy: _timeInfo_startTime,
      orderDirection: asc) {
      id
      idoPool
      owner
      saleTokenAddress
      buyTokenAddress
      _saleTokenInfo_symbol
      _saleTokenInfo_name
      _saleTokenInfo_initialSupply
      _saleTokenInfo_metaData
      _saleTokenInfo_description
      _saleInfo_tokenPrice
      _saleInfo_softCap
      _saleInfo_hardCap
      _saleInfo_listingPrice
      _timeInfo_startTime
      _timeInfo_endTime
      _timeInfo_claimTime
    }
  }
`;

export const GET_LIVE_POOLS = gql`
  query {
    idopoolCreateds(where: { 
    _timeInfo_startTime_lte: "${currentTime}",
    _timeInfo_endTime_gt: "${currentTime}" },
    orderBy: _timeInfo_startTime,
    orderDirection: asc) {
      id
      idoPool
      owner
      saleTokenAddress
      buyTokenAddress
      _saleTokenInfo_symbol
      _saleTokenInfo_name
      _saleTokenInfo_initialSupply
      _saleTokenInfo_metaData
      _saleTokenInfo_description
      _saleInfo_tokenPrice
      _saleInfo_softCap
      _saleInfo_hardCap
      _saleInfo_listingPrice
      _timeInfo_startTime
      _timeInfo_endTime
      _timeInfo_claimTime
    }
  }
`;

export const GET_ENDED_POOLS = gql`
  query {
    idopoolCreateds(where: { 
    _timeInfo_endTime_lte: "${currentTime}",
    _timeInfo_claimTime_gt: "${currentTime}" },
    orderBy: _timeInfo_endTime,
    orderDirection: asc) {
      id
      idoPool
      owner
      saleTokenAddress
      buyTokenAddress
      _saleTokenInfo_symbol
      _saleTokenInfo_name
      _saleTokenInfo_initialSupply
      _saleTokenInfo_metaData
      _saleTokenInfo_description
      _saleInfo_tokenPrice
      _saleInfo_softCap
      _saleInfo_hardCap
      _saleInfo_listingPrice
      _timeInfo_startTime
      _timeInfo_endTime
      _timeInfo_claimTime
    }
  }
`;

export const GET_CLAIMABLE_POOLS = gql`
  query {
    idopoolCreateds(
      where: { _timeInfo_claimTime_lt: "${currentTime}" },
      orderBy: _timeInfo_claimTime,
      orderDirection: asc) {
      id
      idoPool
      owner
      saleTokenAddress
      buyTokenAddress
      _saleTokenInfo_symbol
      _saleTokenInfo_name
      _saleTokenInfo_initialSupply
      _saleTokenInfo_metaData
      _saleTokenInfo_description
      _saleInfo_tokenPrice
      _saleInfo_softCap
      _saleInfo_hardCap
      _saleInfo_listingPrice
      _timeInfo_startTime
      _timeInfo_endTime
      _timeInfo_claimTime
    }
  }
`;
