const TEAMS = [
  {id:109,abbr:'ARI',city:'Arizona',    name:'Arizona Diamondbacks',  color:'#A71930',alt:'#E3D4AD'},
  {id:133,abbr:'ATH',city:'Oakland',    name:'Athletics',             color:'#003831',alt:'#EFB21E'},
  {id:144,abbr:'ATL',city:'Atlanta',    name:'Atlanta Braves',        color:'#CE1141',alt:'#13274F'},
  {id:110,abbr:'BAL',city:'Baltimore',  name:'Baltimore Orioles',     color:'#DF4601',alt:'#000000'},
  {id:111,abbr:'BOS',city:'Boston',     name:'Boston Red Sox',        color:'#BD3039',alt:'#0D2B56'},
  {id:112,abbr:'CHC',city:'Chicago',    name:'Chicago Cubs',          color:'#0E3386',alt:'#CC3433'},
  {id:145,abbr:'CWS',city:'Chicago',    name:'Chicago White Sox',     color:'#27251F',alt:'#C4CED4'},
  {id:113,abbr:'CIN',city:'Cincinnati', name:'Cincinnati Reds',       color:'#C6011F',alt:'#000000'},
  {id:114,abbr:'CLE',city:'Cleveland',  name:'Cleveland Guardians',   color:'#00385D',alt:'#E31937'},
  {id:115,abbr:'COL',city:'Colorado',   name:'Colorado Rockies',      color:'#33006F',alt:'#C4CED4'},
  {id:116,abbr:'DET',city:'Detroit',    name:'Detroit Tigers',        color:'#0C2340',alt:'#FA4616'},
  {id:117,abbr:'HOU',city:'Houston',    name:'Houston Astros',        color:'#002D62',alt:'#EB6E1F'},
  {id:118,abbr:'KC', city:'Kansas City',name:'Kansas City Royals',    color:'#004687',alt:'#C09A5B'},
  {id:108,abbr:'LAA',city:'Los Angeles',name:'Los Angeles Angels',    color:'#BA0021',alt:'#003263'},
  {id:119,abbr:'LAD',city:'Los Angeles',name:'Los Angeles Dodgers',   color:'#005A9C',alt:'#EF3E42'},
  {id:146,abbr:'MIA',city:'Miami',      name:'Miami Marlins',         color:'#00A3E0',alt:'#EF3340'},
  {id:158,abbr:'MIL',city:'Milwaukee',  name:'Milwaukee Brewers',     color:'#12284B',alt:'#FFC52F'},
  {id:142,abbr:'MIN',city:'Minnesota',  name:'Minnesota Twins',       color:'#002B5C',alt:'#D31145'},
  {id:121,abbr:'NYM',city:'New York',   name:'New York Mets',         color:'#002D72',alt:'#FF5910'},
  {id:147,abbr:'NYY',city:'New York',   name:'New York Yankees',      color:'#132448',alt:'#C4CED4'},
  {id:143,abbr:'PHI',city:'Philadelphia',name:'Philadelphia Phillies',color:'#E81828',alt:'#002D72'},
  {id:134,abbr:'PIT',city:'Pittsburgh', name:'Pittsburgh Pirates',    color:'#27251F',alt:'#FDB827'},
  {id:135,abbr:'SD', city:'San Diego',  name:'San Diego Padres',      color:'#2F241D',alt:'#FFC425'},
  {id:137,abbr:'SF', city:'San Francisco',name:'San Francisco Giants',color:'#FD5A1E',alt:'#27251F'},
  {id:136,abbr:'SEA',city:'Seattle',    name:'Seattle Mariners',      color:'#0C2C56',alt:'#005C5C'},
  {id:138,abbr:'STL',city:'St. Louis',  name:'St. Louis Cardinals',   color:'#C41E3A',alt:'#FEDB00'},
  {id:139,abbr:'TB', city:'Tampa Bay',  name:'Tampa Bay Rays',        color:'#092C5C',alt:'#8FBCE6'},
  {id:140,abbr:'TEX',city:'Texas',      name:'Texas Rangers',         color:'#003278',alt:'#C0111F'},
  {id:141,abbr:'TOR',city:'Toronto',    name:'Toronto Blue Jays',     color:'#134A8E',alt:'#E8291C'},
  {id:120,abbr:'WSH',city:'Washington', name:'Washington Nationals',  color:'#AB0003',alt:'#14225A'},
];

const HITTING_STATS = [
  // ── Counting stats ────────────────────────────────────────────────────────
  {key:'homeRuns',            label:'Home Runs',               type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'rbi',                 label:'RBI',                     type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'hits',                label:'Hits',                    type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'runs',                label:'Runs Scored',             type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'stolenBases',         label:'Stolen Bases',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'strikeOuts',          label:'Strikeouts (Batter)',     type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'baseOnBalls',         label:'Walks',                   type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'doubles',             label:'Doubles',                 type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'triples',             label:'Triples',                 type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'totalBases',          label:'Total Bases',             type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'plateAppearances',    label:'Plate Appearances',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'atBats',              label:'At Bats',                 type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'gamesPlayed',         label:'Games Played',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'sacFlies',            label:'Sacrifice Flies',         type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'sacBunts',            label:'Sacrifice Bunts',         type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'hitByPitch',          label:'Hit By Pitch',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'intentionalWalks',    label:'Intentional Walks',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'caughtStealing',      label:'Caught Stealing',         type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'groundIntoDoublePlay',label:'Ground Into DP',          type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'leftOnBase',          label:'Left On Base',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'numberOfPitches',     label:'Pitches Seen',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'groundOuts',          label:'Ground Outs',             type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  // ── Rate / ratio stats ────────────────────────────────────────────────────
  {key:'avg',                 label:'Batting Average',         type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'ops',                 label:'OPS',                     type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'slg',                 label:'Slugging %',              type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'obp',                 label:'On-Base %',               type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'babip',               label:'BABIP',                   type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'stolenBasePercentage',label:'Stolen Base %',           type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'atBatsPerHomeRun',    label:'AB Per Home Run',         type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(1),         order:'asc',  pool:'Qualified'},
  {key:'groundOutsToAirouts', label:'GB/FB Ratio',             type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'desc', pool:'Qualified'},
  // ── Advanced (season) ─────────────────────────────────────────────────────
  {key:'war',                 label:'WAR',                     type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'desc'},
  {key:'woba',                label:'wOBA',                    type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'wRcPlus',             label:'wRC+',                    type:'sabermetrics',careerOk:false, fmt:v=>Math.round(v)+'',                 order:'desc', pool:'Qualified'},
  // ── Baseball Reference (static imports) ─────────────────────────────────────
  {key:'rbi',label:'RBI — All-Time (Baseball Ref)',type:'static',dataset:'BBREF_RBI_ALL_TIME',careerOk:true,fmt:v=>+v,order:'desc'},
  // ── All-Time only (careerAdvanced) ────────────────────────────────────────
  {key:'extraBaseHits',               label:'Extra Base Hits',          type:'careerAdvanced',careerOk:true,  fmt:v=>+v,                           order:'desc'},
  {key:'flyOuts',                     label:'Fly Outs',                 type:'careerAdvanced',careerOk:true,  fmt:v=>+v,                           order:'desc'},
  {key:'reachedOnError',              label:'Reached On Error',         type:'careerAdvanced',careerOk:true,  fmt:v=>+v,                           order:'desc'},
  {key:'walkOffs',                    label:'Walk-Off Hits',            type:'careerAdvanced',careerOk:true,  fmt:v=>+v,                           order:'desc'},
  {key:'iso',                         label:'ISO (Isolated Power)',     type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),     order:'desc', pool:'Qualified'},
  {key:'walksPerPlateAppearance',     label:'BB/PA',                    type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),     order:'desc', pool:'Qualified'},
  {key:'strikeoutsPerPlateAppearance',label:'K/PA',                     type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),     order:'desc', pool:'Qualified'},
  {key:'homeRunsPerPlateAppearance',  label:'HR/PA',                    type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(4),     order:'desc', pool:'Qualified'},
  {key:'walksPerStrikeout',           label:'BB/K Ratio',               type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),     order:'desc', pool:'Qualified'},
  {key:'pitchesPerPlateAppearance',   label:'Pitches Per PA',           type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(2),     order:'desc', pool:'Qualified'},
];
const PITCHING_STATS = [
  // ── Counting stats ────────────────────────────────────────────────────────
  {key:'strikeOuts',          label:'Strikeouts',              type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'wins',                label:'Wins',                    type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'saves',               label:'Saves',                   type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'saveOpportunities',   label:'Save Opportunities',      type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'holds',               label:'Holds',                   type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'homeRuns',            label:'Home Runs Allowed',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'baseOnBalls',         label:'Walks Allowed',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'hits',                label:'Hits Allowed',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'gamesStarted',        label:'Games Started',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'gamesPitched',        label:'Games Pitched',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'gamesFinished',       label:'Games Finished',          type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'losses',              label:'Losses',                  type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'battersFaced',        label:'Batters Faced',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'blownSaves',          label:'Blown Saves',             type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'completeGames',       label:'Complete Games',          type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'shutouts',            label:'Shutouts',                type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'wildPitches',         label:'Wild Pitches',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'hitBatsmen',          label:'Hit Batters (HBP)',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'balks',               label:'Balks',                   type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'pickoffs',            label:'Pickoffs',                type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'inheritedRunners',    label:'Inherited Runners',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'inheritedRunnersScored',label:'Inherited Runs Scored', type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'earnedRuns',          label:'Earned Runs Allowed',     type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'outs',                label:'Outs Recorded',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'strikes',             label:'Strikes Thrown',          type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  // ── Rate stats ───────────────────────────────────────────────────────────
  {key:'era',                 label:'ERA',                     type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'whip',                label:'WHIP',                    type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'strikeoutsPer9Inn',   label:'K/9',                     type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'desc', pool:'Qualified'},
  {key:'walksPer9Inn',        label:'BB/9',                    type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'asc',  pool:'Qualified'},
  {key:'hitsPer9Inn',         label:'H/9',                     type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'asc',  pool:'Qualified'},
  {key:'strikeoutWalkRatio',  label:'K/BB Ratio',              type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'desc', pool:'Qualified'},
  {key:'pitchesPerInning',    label:'Pitches Per Inning',      type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'winPercentage',       label:'Win %',                   type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  // ── Advanced ─────────────────────────────────────────────────────────────
  {key:'war',                 label:'WAR',                     type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'desc'},
  {key:'fip',                 label:'FIP',                     type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'xfip',                label:'xFIP',                    type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'eraMinus',            label:'ERA-',                    type:'sabermetrics',careerOk:false, fmt:v=>Math.round(v)+'',                 order:'asc',  pool:'Qualified'},
  {key:'fipMinus',            label:'FIP-',                    type:'sabermetrics',careerOk:false, fmt:v=>Math.round(v)+'',                 order:'asc',  pool:'Qualified'},
  {key:'ra9War',              label:'RA9-WAR',                 type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'desc'},
  {key:'pli',                 label:'Leverage Index (pLI)',    type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'desc'},
];

function logoUrl(id){ return `https://www.mlbstatic.com/team-logos/${id}.svg`; }

function logoImg(teamId, color, alt, abbr, size=36){
  return `<img src="${logoUrl(teamId)}" width="${size}" height="${size}" style="object-fit:contain;flex-shrink:0"
    onerror="this.outerHTML='<div style=\\'width:${size}px;height:${size}px;border-radius:50%;background:${color};color:${alt};display:flex;align-items:center;justify-content:center;font-family:Barlow Condensed,sans-serif;font-size:${Math.max(7,size/3.2)|0}px;\\'>${abbr}</div>'" alt="${abbr}"/>`;
}

function norm(s){
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9\s]/g,'').trim();
}
function isMatch(guess, playerName){
  const g=norm(guess), full=norm(playerName);
  if(full===g) return true;
  const tokens=full.split(/\s+/), last=tokens[tokens.length-1];
  if(last.length>=4 && last===g) return true;
  const noSfx=tokens.filter(t=>!['jr','sr','ii','iii','iv'].includes(t));
  if(noSfx.join(' ')===g) return true;
  if(noSfx[noSfx.length-1]?.length>=4 && noSfx[noSfx.length-1]===g) return true;
  return false;
}


// ── Baseball Reference Static Datasets ───────────────────────────────────────
// Manually imported from Baseball Reference — includes historical players
// the MLB Stats API doesn't cover (e.g. Cap Anson, 19th century stats)

const BBREF_RBI_ALL_TIME = [
  {rank:1,name:'Henry Aaron',value:'2297',nameLower:'henry aaron'},
  {rank:2,name:'Albert Pujols',value:'2218',nameLower:'albert pujols'},
  {rank:3,name:'Babe Ruth',value:'2214',nameLower:'babe ruth'},
  {rank:4,name:'Alex Rodriguez',value:'2086',nameLower:'alex rodriguez'},
  {rank:5,name:'Cap Anson',value:'2075',nameLower:'cap anson'},
  {rank:6,name:'Barry Bonds',value:'1996',nameLower:'barry bonds'},
  {rank:7,name:'Lou Gehrig',value:'1995',nameLower:'lou gehrig'},
  {rank:8,name:'Stan Musial',value:'1951',nameLower:'stan musial'},
  {rank:9,name:'Ty Cobb',value:'1944',nameLower:'ty cobb'},
  {rank:10,name:'Jimmie Foxx',value:'1922',nameLower:'jimmie foxx'},
  {rank:11,name:'Eddie Murray',value:'1917',nameLower:'eddie murray'},
  {rank:12,name:'Willie Mays',value:'1909',nameLower:'willie mays'},
  {rank:13,name:'Miguel Cabrera',value:'1881',nameLower:'miguel cabrera'},
  {rank:14,name:'Mel Ott',value:'1860',nameLower:'mel ott'},
  {rank:15,name:'Carl Yastrzemski',value:'1844',nameLower:'carl yastrzemski'},
  {rank:16,name:'Ted Williams',value:'1839',nameLower:'ted williams'},
  {rank:17,name:'Ken Griffey Jr.',value:'1836',nameLower:'ken griffey jr.'},
  {rank:18,name:'Rafael Palmeiro',value:'1835',nameLower:'rafael palmeiro'},
  {rank:19,name:'Dave Winfield',value:'1833',nameLower:'dave winfield'},
  {rank:20,name:'Manny Ramirez',value:'1831',nameLower:'manny ramirez'},
  {rank:21,name:'Al Simmons',value:'1828',nameLower:'al simmons'},
  {rank:22,name:'Frank Robinson',value:'1812',nameLower:'frank robinson'},
  {rank:23,name:'David Ortiz',value:'1768',nameLower:'david ortiz'},
  {rank:24,name:'Honus Wagner',value:'1732',nameLower:'honus wagner'},
  {rank:25,name:'Adrian Beltré',value:'1707',nameLower:'adrian beltré'},
  {rank:26,name:'Frank Thomas',value:'1704',nameLower:'frank thomas'},
  {rank:27,name:'Reggie Jackson',value:'1702',nameLower:'reggie jackson'},
  {rank:28,name:'Jim Thome',value:'1699',nameLower:'jim thome'},
  {rank:29,name:'Cal Ripken Jr.',value:'1695',nameLower:'cal ripken jr.'},
  {rank:30,name:'Gary Sheffield',value:'1676',nameLower:'gary sheffield'},
  {rank:31,name:'Sammy Sosa',value:'1667',nameLower:'sammy sosa'},
  {rank:32,name:'Tony Pérez',value:'1652',nameLower:'tony pérez'},
  {rank:33,name:'Ernie Banks',value:'1636',nameLower:'ernie banks'},
  {rank:34,name:'Harold Baines',value:'1628',nameLower:'harold baines'},
  {rank:35,name:'Chipper Jones',value:'1623',nameLower:'chipper jones'},
  {rank:36,name:'Goose Goslin',value:'1612',nameLower:'goose goslin'},
  {rank:37,name:'Nap Lajoie',value:'1599',nameLower:'nap lajoie'},
  {rank:38,name:'George Brett',value:'1596',nameLower:'george brett'},
  {rank:39,name:'Mike Schmidt',value:'1595',nameLower:'mike schmidt'},
  {rank:40,name:'Andre Dawson',value:'1591',nameLower:'andre dawson'},
  {rank:41,name:'Carlos Beltrán',value:'1587',nameLower:'carlos beltrán'},
  {rank:42,name:'Rogers Hornsby',value:'1584',nameLower:'rogers hornsby'},
  {rank:42,name:'Harmon Killebrew',value:'1584',nameLower:'harmon killebrew'},
  {rank:43,name:'Al Kaline',value:'1582',nameLower:'al kaline'},
  {rank:44,name:'Jake Beckley',value:'1581',nameLower:'jake beckley'},
  {rank:45,name:'Willie McCovey',value:'1555',nameLower:'willie mccovey'},
  {rank:46,name:'Fred McGriff',value:'1550',nameLower:'fred mcgriff'},
  {rank:47,name:'Harry Heilmann',value:'1543',nameLower:'harry heilmann'},
  {rank:48,name:'Willie Stargell',value:'1540',nameLower:'willie stargell'},
  {rank:49,name:'Joe DiMaggio',value:'1537',nameLower:'joe dimaggio'},
  {rank:50,name:'Tris Speaker',value:'1531',nameLower:'tris speaker'},
  {rank:51,name:'Jeff Bagwell',value:'1529',nameLower:'jeff bagwell'},
  {rank:52,name:'Sam Crawford',value:'1523',nameLower:'sam crawford'},
  {rank:53,name:'Jeff Kent',value:'1518',nameLower:'jeff kent'},
  {rank:54,name:'Carlos Delgado',value:'1512',nameLower:'carlos delgado'},
  {rank:55,name:'Mickey Mantle',value:'1509',nameLower:'mickey mantle'},
  {rank:56,name:'Vladimir Guerrero',value:'1496',nameLower:'vladimir guerrero'},
  {rank:57,name:'Dave Parker',value:'1493',nameLower:'dave parker'},
  {rank:58,name:'Billy Williams',value:'1475',nameLower:'billy williams'},
  {rank:59,name:'Ed Delahanty',value:'1466',nameLower:'ed delahanty'},
  {rank:59,name:'Rusty Staub',value:'1466',nameLower:'rusty staub'},
  {rank:60,name:'Eddie Mathews',value:'1453',nameLower:'eddie mathews'},
  {rank:61,name:'Jim Rice',value:'1451',nameLower:'jim rice'},
  {rank:62,name:'Joe Carter',value:'1445',nameLower:'joe carter'},
  {rank:63,name:'Jason Giambi',value:'1441',nameLower:'jason giambi'},
  {rank:64,name:'George Davis',value:'1440',nameLower:'george davis'},
  {rank:65,name:'Luis Gonzalez',value:'1439',nameLower:'luis gonzalez'},
  {rank:66,name:'Yogi Berra',value:'1430',nameLower:'yogi berra'},
  {rank:67,name:'Charlie Gehringer',value:'1427',nameLower:'charlie gehringer'},
  {rank:68,name:'Andrés Galarraga',value:'1425',nameLower:'andrés galarraga'},
  {rank:69,name:'Joe Cronin',value:'1424',nameLower:'joe cronin'},
  {rank:70,name:'Jim Bottomley',value:'1422',nameLower:'jim bottomley'},
  {rank:71,name:'Aramis Ramírez',value:'1417',nameLower:'aramis ramírez'},
  {rank:72,name:'Mark McGwire',value:'1414',nameLower:'mark mcgwire'},
  {rank:73,name:'Paul Konerko',value:'1412',nameLower:'paul konerko'},
  {rank:74,name:'José Canseco',value:'1407',nameLower:'josé canseco'},
  {rank:75,name:'Todd Helton',value:'1406',nameLower:'todd helton'},
  {rank:75,name:'Robin Yount',value:'1406',nameLower:'robin yount'},
  {rank:76,name:'Juan González',value:'1404',nameLower:'juan gonzález'},
  {rank:77,name:'Torii Hunter',value:'1391',nameLower:'torii hunter'},
  {rank:78,name:'Ted Simmons',value:'1389',nameLower:'ted simmons'},
  {rank:79,name:'Dwight Evans',value:'1384',nameLower:'dwight evans'},
  {rank:80,name:'Joe Medwick',value:'1383',nameLower:'joe medwick'},
  {rank:81,name:'Lave Cross',value:'1378',nameLower:'lave cross'},
  {rank:82,name:'Johnny Bench',value:'1376',nameLower:'johnny bench'},
  {rank:83,name:'Chili Davis',value:'1372',nameLower:'chili davis'},
  {rank:84,name:'Freddie Freeman',value:'1371',nameLower:'freddie freeman'},
  {rank:85,name:'Garret Anderson',value:'1365',nameLower:'garret anderson'},
  {rank:85,name:'Orlando Cepeda',value:'1365',nameLower:'orlando cepeda'},
  {rank:86,name:'Bobby Abreu',value:'1363',nameLower:'bobby abreu'},
  {rank:86,name:'Carlos Lee',value:'1363',nameLower:'carlos lee'},
  {rank:87,name:'Brooks Robinson',value:'1357',nameLower:'brooks robinson'},
  {rank:88,name:'Darrell Evans',value:'1354',nameLower:'darrell evans'},
  {rank:89,name:'Gary Gaetti',value:'1341',nameLower:'gary gaetti'},
  {rank:90,name:'Johnny Mize',value:'1337',nameLower:'johnny mize'},
  {rank:91,name:'Mike Piazza',value:'1335',nameLower:'mike piazza'},
  {rank:92,name:'Duke Snider',value:'1333',nameLower:'duke snider'},
  {rank:93,name:'Iván Rodríguez',value:'1332',nameLower:'iván rodríguez'},
  {rank:94,name:'Ron Santo',value:'1331',nameLower:'ron santo'},
  {rank:95,name:'Carlton Fisk',value:'1330',nameLower:'carlton fisk'},
  {rank:96,name:'Al Oliver',value:'1326',nameLower:'al oliver'},
  {rank:97,name:'Nelson Cruz',value:'1325',nameLower:'nelson cruz'},
  {rank:98,name:'Roger Connor',value:'1323',nameLower:'roger connor'},
  {rank:99,name:'Rubén Sierra',value:'1322',nameLower:'rubén sierra'},
  {rank:100,name:'Graig Nettles',value:'1314',nameLower:'graig nettles'},
  {rank:100,name:'Pete Rose',value:'1314',nameLower:'pete rose'},
  {rank:101,name:'Derek Jeter',value:'1311',nameLower:'derek jeter'},
  {rank:101,name:'Mickey Vernon',value:'1311',nameLower:'mickey vernon'},
  {rank:101,name:'Larry Walker',value:'1311',nameLower:'larry walker'},
  {rank:102,name:'Paul Waner',value:'1309',nameLower:'paul waner'},
  {rank:103,name:'Steve Garvey',value:'1308',nameLower:'steve garvey'},
  {rank:103,name:'Sam Thompson',value:'1308',nameLower:'sam thompson'},
  {rank:104,name:'Paul Molitor',value:'1307',nameLower:'paul molitor'},
  {rank:105,name:'Robinson Canó',value:'1306',nameLower:'robinson canó'},
  {rank:106,name:'Roberto Clemente',value:'1305',nameLower:'roberto clemente'},
  {rank:107,name:'Enos Slaughter',value:'1304',nameLower:'enos slaughter'},
  {rank:108,name:'Hugh Duffy',value:'1302',nameLower:'hugh duffy'},
  {rank:108,name:'Miguel Tejada',value:'1302',nameLower:'miguel tejada'},
  {rank:109,name:'Dan Brouthers',value:'1301',nameLower:'dan brouthers'},
  {rank:110,name:'Eddie Collins',value:'1299',nameLower:'eddie collins'},
  {rank:111,name:'Mark Teixeira',value:'1298',nameLower:'mark teixeira'},
  {rank:112,name:'Andruw Jones',value:'1289',nameLower:'andruw jones'},
  {rank:113,name:'Moisés Alou',value:'1287',nameLower:'moisés alou'},
  {rank:113,name:'Scott Rolen',value:'1287',nameLower:'scott rolen'},
  {rank:114,name:'Del Ennis',value:'1284',nameLower:'del ennis'},
  {rank:115,name:'Bob Johnson',value:'1283',nameLower:'bob johnson'},
  {rank:116,name:'Don Baylor',value:'1276',nameLower:'don baylor'},
  {rank:117,name:'Hank Greenberg',value:'1274',nameLower:'hank greenberg'},
  {rank:117,name:'Gil Hodges',value:'1274',nameLower:'gil hodges'},
  {rank:118,name:'Paul Goldschmidt',value:'1273',nameLower:'paul goldschmidt'},
  {rank:118,name:'Pie Traynor',value:'1273',nameLower:'pie traynor'},
  {rank:119,name:'Tino Martinez',value:'1271',nameLower:'tino martinez'},
  {rank:120,name:'Paul O\'Neill',value:'1269',nameLower:'paul o\'neill'},
  {rank:121,name:'Dale Murphy',value:'1266',nameLower:'dale murphy'},
  {rank:122,name:'Edwin Encarnación',value:'1261',nameLower:'edwin encarnación'},
  {rank:122,name:'Edgar Martínez',value:'1261',nameLower:'edgar martínez'},
  {rank:123,name:'Bernie Williams',value:'1257',nameLower:'bernie williams'},
  {rank:124,name:'Zack Wheat',value:'1248',nameLower:'zack wheat'},
  {rank:125,name:'Bobby Doerr',value:'1247',nameLower:'bobby doerr'},
  {rank:126,name:'Frankie Frisch',value:'1244',nameLower:'frankie frisch'},
  {rank:126,name:'Lee May',value:'1244',nameLower:'lee may'},
  {rank:127,name:'Albert Belle',value:'1239',nameLower:'albert belle'},
  {rank:127,name:'George Foster',value:'1239',nameLower:'george foster'},
  {rank:128,name:'Magglio Ordóñez',value:'1236',nameLower:'magglio ordóñez'},
  {rank:129,name:'Lance Berkman',value:'1234',nameLower:'lance berkman'},
  {rank:129,name:'Bill Dahlen',value:'1234',nameLower:'bill dahlen'},
  {rank:130,name:'John Olerud',value:'1230',nameLower:'john olerud'},
  {rank:131,name:'Gary Carter',value:'1225',nameLower:'gary carter'},
  {rank:132,name:'Nolan Arenado',value:'1221',nameLower:'nolan arenado'},
  {rank:133,name:'Matt Holliday',value:'1220',nameLower:'matt holliday'},
  {rank:134,name:'Matt Williams',value:'1218',nameLower:'matt williams'},
  {rank:135,name:'Dave Kingman',value:'1210',nameLower:'dave kingman'},
  {rank:136,name:'Bill Dickey',value:'1209',nameLower:'bill dickey'},
  {rank:137,name:'Bill Buckner',value:'1208',nameLower:'bill buckner'},
  {rank:137,name:'Jim O\'Rourke',value:'1208',nameLower:'jim o\'rourke'},
  {rank:138,name:'Raúl Ibañez',value:'1207',nameLower:'raúl ibañez'},
  {rank:139,name:'Ellis Burks',value:'1206',nameLower:'ellis burks'},
  {rank:140,name:'Will Clark',value:'1205',nameLower:'will clark'},
  {rank:141,name:'Adrián González',value:'1202',nameLower:'adrián gonzález'},
  {rank:142,name:'Chuck Klein',value:'1201',nameLower:'chuck klein'},
  {rank:143,name:'Jim Edmonds',value:'1199',nameLower:'jim edmonds'},
  {rank:144,name:'Bob Elliott',value:'1195',nameLower:'bob elliott'},
  {rank:144,name:'Manny Machado',value:'1195',nameLower:'manny machado'},
  {rank:145,name:'Julio Franco',value:'1194',nameLower:'julio franco'},
  {rank:145,name:'Ryan Howard',value:'1194',nameLower:'ryan howard'},
  {rank:145,name:'Joe Kelley',value:'1194',nameLower:'joe kelley'},
  {rank:145,name:'Tony Lazzeri',value:'1194',nameLower:'tony lazzeri'},
  {rank:146,name:'Boog Powell',value:'1187',nameLower:'boog powell'},
  {rank:147,name:'Joe Torre',value:'1185',nameLower:'joe torre'},
  {rank:148,name:'Heinie Manush',value:'1183',nameLower:'heinie manush'},
  {rank:148,name:'Giancarlo Stanton',value:'1183',nameLower:'giancarlo stanton'},
  {rank:149,name:'Robin Ventura',value:'1182',nameLower:'robin ventura'},
  {rank:150,name:'Jack Clark',value:'1180',nameLower:'jack clark'},
  {rank:151,name:'Gabby Hartnett',value:'1179',nameLower:'gabby hartnett'},
  {rank:152,name:'Víctor Martínez',value:'1178',nameLower:'víctor martínez'},
  {rank:152,name:'George Sisler',value:'1178',nameLower:'george sisler'},
  {rank:152,name:'Vic Wertz',value:'1178',nameLower:'vic wertz'},
  {rank:153,name:'Sherry Magee',value:'1176',nameLower:'sherry magee'},
  {rank:154,name:'Craig Biggio',value:'1175',nameLower:'craig biggio'},
  {rank:155,name:'Vern Stephens',value:'1174',nameLower:'vern stephens'},
  {rank:155,name:'Bobby Veach',value:'1174',nameLower:'bobby veach'},
  {rank:156,name:'Bobby Bonilla',value:'1173',nameLower:'bobby bonilla'},
  {rank:157,name:'Vada Pinson',value:'1169',nameLower:'vada pinson'},
  {rank:158,name:'Adam Dunn',value:'1168',nameLower:'adam dunn'},
  {rank:159,name:'Steve Finley',value:'1167',nameLower:'steve finley'},
  {rank:160,name:'Earl Averill',value:'1164',nameLower:'earl averill'},
  {rank:161,name:'Willie Horton',value:'1163',nameLower:'willie horton'},
  {rank:162,name:'Rocky Colavito',value:'1159',nameLower:'rocky colavito'},
  {rank:162,name:'Evan Longoria',value:'1159',nameLower:'evan longoria'},
  {rank:162,name:'Alfonso Soriano',value:'1159',nameLower:'alfonso soriano'},
  {rank:163,name:'Andrew McCutchen',value:'1157',nameLower:'andrew mccutchen'},
  {rank:164,name:'Ryan Braun',value:'1154',nameLower:'ryan braun'},
  {rank:165,name:'B.J. Surhoff',value:'1153',nameLower:'b.j. surhoff'},
  {rank:166,name:'Rudy York',value:'1149',nameLower:'rudy york'},
  {rank:167,name:'Roy Sievers',value:'1147',nameLower:'roy sievers'},
  {rank:168,name:'Mark Grace',value:'1146',nameLower:'mark grace'},
  {rank:169,name:'Joey Votto',value:'1144',nameLower:'joey votto'},
  {rank:170,name:'Dante Bichette',value:'1141',nameLower:'dante bichette'},
  {rank:170,name:'Ken Boyer',value:'1141',nameLower:'ken boyer'},
  {rank:171,name:'Ron Cey',value:'1139',nameLower:'ron cey'},
  {rank:171,name:'Johnny Damon',value:'1139',nameLower:'johnny damon'},
  {rank:172,name:'Tony Gwynn',value:'1138',nameLower:'tony gwynn'},
  {rank:173,name:'Tommy Corcoran',value:'1137',nameLower:'tommy corcoran'},
  {rank:174,name:'Carlos Santana',value:'1136',nameLower:'carlos santana'},
  {rank:175,name:'Roberto Alomar',value:'1134',nameLower:'roberto alomar'},
  {rank:176,name:'Joe Morgan',value:'1133',nameLower:'joe morgan'},
  {rank:177,name:'Greg Luzinski',value:'1128',nameLower:'greg luzinski'},
  {rank:178,name:'Cecil Cooper',value:'1125',nameLower:'cecil cooper'},
  {rank:178,name:'Tim Wallach',value:'1125',nameLower:'tim wallach'},
  {rank:179,name:'Ed McKean',value:'1124',nameLower:'ed mckean'},
  {rank:180,name:'Joe Adcock',value:'1122',nameLower:'joe adcock'},
  {rank:181,name:'Bobby Wallace',value:'1121',nameLower:'bobby wallace'},
  {rank:182,name:'Dick Allen',value:'1119',nameLower:'dick allen'},
  {rank:182,name:'Frank Howard',value:'1119',nameLower:'frank howard'},
  {rank:183,name:'Luke Appling',value:'1116',nameLower:'luke appling'},
  {rank:184,name:'Rickey Henderson',value:'1115',nameLower:'rickey henderson'},
  {rank:185,name:'George Hendrick',value:'1111',nameLower:'george hendrick'},
  {rank:185,name:'Fred Lynn',value:'1111',nameLower:'fred lynn'},
  {rank:186,name:'Todd Zeile',value:'1110',nameLower:'todd zeile'},
  {rank:187,name:'Bryce Harper',value:'1108',nameLower:'bryce harper'},
  {rank:188,name:'Buddy Bell',value:'1106',nameLower:'buddy bell'},
  {rank:188,name:'Wally Joyner',value:'1106',nameLower:'wally joyner'},
  {rank:189,name:'Vinny Castilla',value:'1105',nameLower:'vinny castilla'},
  {rank:190,name:'Norm Cash',value:'1104',nameLower:'norm cash'},
  {rank:191,name:'Don Mattingly',value:'1099',nameLower:'don mattingly'},
  {rank:192,name:'Hal McRae',value:'1097',nameLower:'hal mcrae'},
  {rank:193,name:'Larry Doby',value:'1093',nameLower:'larry doby'},
  {rank:193,name:'Jimmy Ryan',value:'1093',nameLower:'jimmy ryan'},
  {rank:194,name:'Reggie Smith',value:'1092',nameLower:'reggie smith'},
  {rank:195,name:'Minnie Miñoso',value:'1089',nameLower:'minnie miñoso'},
  {rank:196,name:'Kent Hrbek',value:'1086',nameLower:'kent hrbek'},
  {rank:197,name:'Kirby Puckett',value:'1085',nameLower:'kirby puckett'},
  {rank:198,name:'Lou Whitaker',value:'1084',nameLower:'lou whitaker'},
  {rank:199,name:'Brian Giles',value:'1078',nameLower:'brian giles'},
  {rank:199,name:'Derrek Lee',value:'1078',nameLower:'derrek lee'},
  {rank:199,name:'Bill Terry',value:'1078',nameLower:'bill terry'},
  {rank:200,name:'José Cruz',value:'1077',nameLower:'josé cruz'},
  {rank:200,name:'Charlie Grimm',value:'1077',nameLower:'charlie grimm'},
  {rank:200,name:'Sam Rice',value:'1077',nameLower:'sam rice'},
  {rank:201,name:'Pinky Higgins',value:'1075',nameLower:'pinky higgins'},
  {rank:202,name:'Brian Downing',value:'1073',nameLower:'brian downing'},
  {rank:203,name:'Jermaine Dye',value:'1072',nameLower:'jermaine dye'},
  {rank:203,name:'Bid McPhee',value:'1072',nameLower:'bid mcphee'},
  {rank:203,name:'Greg Vaughn',value:'1072',nameLower:'greg vaughn'},
  {rank:204,name:'Jeff Conine',value:'1071',nameLower:'jeff conine'},
  {rank:204,name:'Keith Hernandez',value:'1071',nameLower:'keith hernandez'},
  {rank:204,name:'J.D. Martinez',value:'1071',nameLower:'j.d. martinez'},
  {rank:204,name:'Bob Meusel',value:'1071',nameLower:'bob meusel'},
  {rank:205,name:'Shawn Green',value:'1070',nameLower:'shawn green'},
  {rank:205,name:'Lance Parrish',value:'1070',nameLower:'lance parrish'},
  {rank:206,name:'Jimmy Dykes',value:'1069',nameLower:'jimmy dykes'},
  {rank:207,name:'Kiki Cuyler',value:'1065',nameLower:'kiki cuyler'},
  {rank:207,name:'Jorge Posada',value:'1065',nameLower:'jorge posada'},
  {rank:207,name:'Ken Singleton',value:'1065',nameLower:'ken singleton'},
  {rank:208,name:'Mo Vaughn',value:'1064',nameLower:'mo vaughn'},
  {rank:209,name:'Stuffy McInnis',value:'1063',nameLower:'stuffy mcinnis'},
  {rank:209,name:'Hack Wilson',value:'1063',nameLower:'hack wilson'},
  {rank:210,name:'Ryne Sandberg',value:'1061',nameLower:'ryne sandberg'},
  {rank:210,name:'Ryan Zimmerman',value:'1061',nameLower:'ryan zimmerman'},
  {rank:211,name:'Carl Furillo',value:'1058',nameLower:'carl furillo'},
  {rank:212,name:'Herman Long',value:'1055',nameLower:'herman long'},
  {rank:213,name:'Joe Sewell',value:'1054',nameLower:'joe sewell'},
  {rank:213,name:'Mike Trout',value:'1054',nameLower:'mike trout'},
  {rank:214,name:'Willie Davis',value:'1053',nameLower:'willie davis'},
  {rank:215,name:'Tommy Davis',value:'1052',nameLower:'tommy davis'},
  {rank:216,name:'George Scott',value:'1051',nameLower:'george scott'},
  {rank:217,name:'Joe Kuhel',value:'1049',nameLower:'joe kuhel'},
  {rank:217,name:'Salvador Perez',value:'1049',nameLower:'salvador perez'},
  {rank:218,name:'Nick Markakis',value:'1046',nameLower:'nick markakis'},
  {rank:219,name:'Ron Fairly',value:'1044',nameLower:'ron fairly'},
  {rank:220,name:'Bobby Murcer',value:'1043',nameLower:'bobby murcer'},
  {rank:221,name:'Sal Bando',value:'1039',nameLower:'sal bando'},
  {rank:222,name:'Joe Judge',value:'1034',nameLower:'joe judge'},
  {rank:223,name:'Matt Kemp',value:'1031',nameLower:'matt kemp'},
  {rank:224,name:'Michael Young',value:'1030',nameLower:'michael young'},
  {rank:225,name:'Prince Fielder',value:'1028',nameLower:'prince fielder'},
  {rank:225,name:'Ted Kluszewski',value:'1028',nameLower:'ted kluszewski'},
  {rank:226,name:'Eric Karros',value:'1027',nameLower:'eric karros'},
  {rank:227,name:'Bobby Thomson',value:'1026',nameLower:'bobby thomson'},
  {rank:228,name:'Chase Utley',value:'1025',nameLower:'chase utley'},
  {rank:229,name:'Bobby Bonds',value:'1024',nameLower:'bobby bonds'},
  {rank:230,name:'Dixie Walker',value:'1023',nameLower:'dixie walker'},
  {rank:231,name:'Travis Fryman',value:'1022',nameLower:'travis fryman'},
  {rank:231,name:'Yadier Molina',value:'1022',nameLower:'yadier molina'},
  {rank:232,name:'Bret Boone',value:'1021',nameLower:'bret boone'},
  {rank:232,name:'Fred Pfeffer',value:'1021',nameLower:'fred pfeffer'},
  {rank:233,name:'George Kelly',value:'1020',nameLower:'george kelly'},
  {rank:234,name:'Brian McCann',value:'1018',nameLower:'brian mccann'},
  {rank:235,name:'David Justice',value:'1017',nameLower:'david justice'},
  {rank:236,name:'Tim Salmon',value:'1016',nameLower:'tim salmon'},
  {rank:237,name:'Roy Campanella',value:'1015',nameLower:'roy campanella'},
  {rank:237,name:'Rod Carew',value:'1015',nameLower:'rod carew'},
  {rank:237,name:'Fred Clarke',value:'1015',nameLower:'fred clarke'},
  {rank:237,name:'Ralph Kiner',value:'1015',nameLower:'ralph kiner'},
  {rank:237,name:'George Van Haltren',value:'1015',nameLower:'george van haltren'},
  {rank:238,name:'Wade Boggs',value:'1014',nameLower:'wade boggs'},
  {rank:239,name:'Dusty Baker',value:'1013',nameLower:'dusty baker'},
  {rank:240,name:'Hal Trosky',value:'1012',nameLower:'hal trosky'},
  {rank:241,name:'Cecil Fielder',value:'1008',nameLower:'cecil fielder'},
  {rank:241,name:'Ron Gant',value:'1008',nameLower:'ron gant'},
];

// Fetch from a static BR dataset instead of the MLB API
function fetchStaticPlayers(dataset){
  return dataset.map(p => ({...p}));
}

const MLB = 'https://statsapi.mlb.com/api/v1';

// Assigns dense ranks: ties share a rank, next distinct value increments by 1 (not skipped)
// e.g. raw values [10, 9, 9, 8] -> ranks [1, 2, 2, 3]
function assignDenseRanks(items, rawKey){
  let rank = 0;
  let lastVal = null;
  return items.map((item) => {
    const val = item[rawKey];
    if(lastVal === null || val !== lastVal){
      rank++;
      lastVal = val;
    }
    return { ...item, rank };
  });
}

async function fetchOneSeason(group, statDef, season, pool, position){
  const order = statDef.order||'desc';
  const playerPool = statDef.pool||pool||'ALL';
  const params = new URLSearchParams({
    stats: statDef.type, group, gameType:'R',
    season, playerPool, limit:300,
    sortStat:statDef.key, order
  });
  if(position && position !== 'ALL') params.set('position', position);
  const r = await fetch(`${MLB}/stats?${params}`);
  if(!r.ok) throw new Error(`MLB API error ${r.status}`);
  const d = await r.json();
  return d.stats?.[0]?.splits || [];
}

async function fetchPlayers(group, statDef, season, pool, position){
  const isCareer = season==='career';
  const order = statDef.order||'desc';

  // Handle static Baseball Reference datasets — ignore season entirely
  if(statDef.type === 'static'){
    const datasetName = statDef.dataset;
    const dataset = (typeof window !== 'undefined' ? window : globalThis)[datasetName];
    if(!dataset) throw new Error('Static dataset not found: ' + datasetName);
    return fetchStaticPlayers(dataset);
  }

  let years = [];
  if(isCareer){
    // career endpoint
  } else if(String(season).startsWith('range:')){
    const [,range] = season.split(':');
    const [start, end] = range.split('-').map(Number);
    for(let y=start; y<=end; y++) years.push(y);
  } else if(String(season).startsWith('decade:')){
    const start = Number(season.split(':')[1]);
    const end = start === 2020 ? 2025 : start + 9;
    for(let y=start; y<=end; y++) years.push(y);
  } else {
    years = [season];
  }

  if(isCareer){
    const playerPool = 'ALL';
    const statType = statDef.type === 'sabermetrics' ? 'sabermetrics' : 'career';
    const params = new URLSearchParams({
      stats: statType, group, gameType:'R',
      playerPool, limit:300,
      sortStat:statDef.key, order:'desc'
    });
    if(position && position !== 'ALL') params.set('position', position);
    const r = await fetch(`${MLB}/stats?${params}`);
    if(!r.ok) throw new Error(`MLB API error ${r.status}`);
    const d = await r.json();
    const splits = d.stats?.[0]?.splits || [];
    if(!splits.length) throw new Error('No data returned. Try a different season or category.');
    const mapped = splits.map((s)=>({
      rawVal: parseFloat(s.stat[statDef.key]),
      name:s.player?.fullName||'?',
      team:s.team?.name||'',
      value:String(statDef.fmt(s.stat[statDef.key])),
      nameLower:(s.player?.fullName||'').toLowerCase()
    }));
    return assignDenseRanks(mapped, 'rawVal');
  }

  if(years.length === 1){
    const playerPool = statDef.pool||pool||'ALL';
    const params = new URLSearchParams({
      stats: statDef.type, group, gameType:'R',
      season: years[0], playerPool, limit:300,
      sortStat:statDef.key, order
    });
    if(position && position !== 'ALL') params.set('position', position);
    const r = await fetch(`${MLB}/stats?${params}`);
    if(!r.ok) throw new Error(`MLB API error ${r.status}`);
    const d = await r.json();
    const splits = d.stats?.[0]?.splits || [];
    if(!splits.length) throw new Error('No data returned. Try a different season or category.');
    const mapped = splits.map((s)=>({
      rawVal: parseFloat(s.stat[statDef.key]),
      name:s.player?.fullName||'?',
      team:s.team?.name||'',
      value:String(statDef.fmt(s.stat[statDef.key])),
      nameLower:(s.player?.fullName||'').toLowerCase()
    }));
    return assignDenseRanks(mapped, 'rawVal');
  }

  const allSplits = await Promise.all(
    years.map(y => fetchOneSeason(group, statDef, y, pool, position).catch(()=>[]))
  );

  const totals = {};
  for(const seasonSplits of allSplits){
    for(const s of seasonSplits){
      const id = s.player?.id;
      if(!id) continue;
      const raw = parseFloat(s.stat[statDef.key]);
      if(isNaN(raw)) continue;
      if(!totals[id]){
        totals[id] = {name: s.player?.fullName||'?', team: s.team?.name||'—', total: 0};
      }
      totals[id].total += raw;
    }
  }

  if(!Object.keys(totals).length) throw new Error('No data returned for this range.');

  const isAsc = order === 'asc';
  const sorted = Object.values(totals).sort((a,b) => isAsc ? a.total-b.total : b.total-a.total);
  const top300 = sorted.slice(0, 300);

  const mapped = top300.map((p)=>({
    rawVal: p.total,
    name:p.name,
    team:p.team,
    value:String(statDef.fmt(p.total)),
    nameLower:p.name.toLowerCase()
  }));
  return assignDenseRanks(mapped, 'rawVal');
}
