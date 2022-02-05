import PoliticsAndWarAPIv3 from "../PoliticsAndWarAPIv3";
import { gql } from "graphql-request";

interface Nation {
  adv_city_planning: boolean;
  adv_engineering_corps: boolean;
  aircraft: number;
  alliance_id: number;
  alliance_position: string;
  aluminum: number;
  arable_land_agency: boolean;
  armss: boolean;
  bauxite: number;
  bauxitew: boolean;
  beigeturns: number;
  cfce: boolean;
  cities: Array<number>;
  city_planning: boolean;
  clinical_research_center: boolean;
  coal: number;
  color: string;
  continent: string;
  date: Date;
  defensive_wars: Array<object>;
  dompolicy: string;
  egr: boolean;
  espionage_available: boolean;
  flag: string;
  food: number;
  gasoline: number;
  green_tech: boolean;
  id: number;
  iron: number;
  irond: boolean;
  ironw: boolean;
  itc: boolean;
  last_active: Date;
  lead: number;
  leader_name: string;
  massirr: boolean;
  missiles: number;
  mlp: boolean;
  money: number;
  moon_landing: boolean;
  munitions: number;
  nation_name: string;
  nrf: boolean;
  nukes: number;
  num_cities: number;
  offensive_wars: Array<object>;
  oil: number;
  pirate_economy: boolean;
  populations: number;
  projects: number;
  propb: boolean;
  received_bankrecs;
  recycling_initiative: boolean;
  score: number;
  sent_bankrecs;
  ships: number;
  soldiers: number;
  space_program: boolean;
  specialized_police_training: boolean;
  spies: number;
  spy_satellite: boolean;
  steel: number;
  tanks: number;
  telecom_satellite: boolean;
  treasures;
  uap: boolean;
  uranium: number;
  vds: boolean;
  vmode: number;
  warpolicy: string;
}

class PoliticsAndWarNation extends PoliticsAndWarAPIv3 implements Nation {
  private _aircraft: number;
  private _alliance_id: number;
  private _alliance_position: string;
  private _aluminum: number;
  private _arable_land_agency: boolean;
  private _armss: boolean;
  private _bauxite: number;
  private _bauxitew: boolean;
  private _beigeturns: number;
  private _cfce: boolean;
  private _cities: number[];
  private _city_planning: boolean;
  private _clinical_research_center: boolean;
  private _coal: number;
  private _color: string;
  private _continent: string;
  private _date: Date;
  private _defensive_wars: object[];
  private _dompolicy: string;
  private _egr: boolean;
  private _espionage_available: boolean;
  private _flag: string;
  private _food: number;
  private _gasoline: number;
  private _green_tech: boolean;
  private _id: number;
  private _iron: number;
  private _irond: boolean;
  private _ironw: boolean;
  private _itc: boolean;
  private _last_active: Date;
  private _lead: number;
  private _leader_name: string;
  private _massirr: boolean;
  private _missiles: number;
  private _mlp: boolean;
  private _money: number;
  private _moon_landing: boolean;
  private _munitions: number;
  private _nation_name: string;
  private _nrf: boolean;
  private _nukes: number;
  private _num_cities: number;
  private _offensive_wars: object[];
  private _oil: number;
  private _pirate_economy: boolean;
  private _populations: number;
  private _projects: number;
  private _propb: boolean;
  private _received_bankrecs: any;
  private _recycling_initiative: boolean;
  private _score: number;
  private _sent_bankrecs: any;
  private _ships: number;
  private _soldiers: number;
  private _space_program: boolean;
  private _specialized_police_training: boolean;
  private _spies: number;
  private _spy_satellite: boolean;
  private _steel: number;
  private _tanks: number;
  private _telecom_satellite: boolean;
  private _treasures: any;
  private _uap: boolean;
  private _uranium: number;
  private _vds: boolean;
  private _vmode: number;
  private _warpolicy: string;
  private _adv_engineering_corps: boolean;
  private _adv_city_planning: boolean;

  constructor(key: string, variables: object) {
    super(key, variables);
    this.query = gql`
      query (
        $ID: [Int]
        $first: Int = 1
        $name: String
        $nation_name: [String]
        $leader_name: [String]
        $alliance_id: [Int]
        $cities: Int
        $min_cities: Int
        $max_cities: Int
        $vmode: Boolean = false
        $page: Int
        $min_score: Float
        $max_score: Float
        $color: String
      ) {
        nations(
          id: $ID
          first: $first
          name: $name
          nation_name: $nation_name
          leader_name: $leader_name
          alliance_id: $alliance_id
          cities: $cities
          min_cities: $min_cities
          max_cities: $max_cities
          vmode: $vmode
          page: $page
          min_score: $min_score
          max_score: $max_score
          color: $color
        ) {
          data {
            adv_city_planning
            adv_engineering_corps
            aircraft
            alliance {
              id
            }
            alliance_id
            alliance_position
            aluminum
            arable_land_agency
            armss
            bauxite
            bauxitew
            beigeturns
            cfce
            cia
            cities {
              id
            }
            city_planning
            clinical_research_center
            coal
            color
            continent
            date
            defensive_wars {
              id
            }
            dompolicy
            egr
            espionage_available
            flag
            food
            gasoline
            green_tech
            id
            iron
            irond
            ironw
            itc
            last_active
            lead
            leader_name
            massirr
            missiles
            mlp
            money
            moon_landing
            munitions
            nation_name
            nrf
            nukes
            num_cities
            offensive_wars {
              id
            }
            oil
            pirate_economy
            population
            projects
            propb
            received_bankrecs {
              id
            }
            recycling_initiative
            score
            sent_bankrecs {
              id
            }
            ships
            soldiers
            space_program
            specialized_police_training
            spies
            spy_satellite
            steel
            tanks
            telecom_satellite
            treasures {
              name
            }
            uap
            uranium
            vds
            vmode
            warpolicy
          }
        }
      }
    `;
  }

  // @ts-ignore
  async initializeData(): Promise<any> {
    const res = await super.initializeData();
    const data = res.data ? res.data.nations['data'] : {}

    for (const key in data) {
      this["_" + key] = data[key];
    }
  }

  public get aircraft(): number {
    return this._aircraft;
  }
  public get alliance_id(): number {
    return this._alliance_id;
  }
  public get alliance_position(): string {
    return this._alliance_position;
  }
  public get aluminum(): number {
    return this._aluminum;
  }
  public get arable_land_agency(): boolean {
    return this._arable_land_agency;
  }
  get armss(): boolean {
    return this._armss;
  }

  get bauxite(): number {
    return this._bauxite;
  }

  get bauxitew(): boolean {
    return this._bauxitew;
  }

  get beigeturns(): number {
    return this._beigeturns;
  }

  get cfce(): boolean {
    return this._cfce;
  }

  get cities(): number[] {
    return this._cities;
  }

  get city_planning(): boolean {
    return this._city_planning;
  }

  get clinical_research_center(): boolean {
    return this._clinical_research_center;
  }

  get coal(): number {
    return this._coal;
  }

  get color(): string {
    return this._color;
  }

  get continent(): string {
    return this._continent;
  }

  get date(): Date {
    return this._date;
  }

  get defensive_wars(): object[] {
    return this._defensive_wars;
  }

  get dompolicy(): string {
    return this._dompolicy;
  }

  get egr(): boolean {
    return this._egr;
  }

  get espionage_available(): boolean {
    return this._espionage_available;
  }

  get flag(): string {
    return this._flag;
  }

  get food(): number {
    return this._food;
  }

  get gasoline(): number {
    return this._gasoline;
  }

  get green_tech(): boolean {
    return this._green_tech;
  }

  get id(): number {
    return this._id;
  }

  get iron(): number {
    return this._iron;
  }

  get irond(): boolean {
    return this._irond;
  }

  get ironw(): boolean {
    return this._ironw;
  }

  get itc(): boolean {
    return this._itc;
  }

  get last_active(): Date {
    return this._last_active;
  }

  get lead(): number {
    return this._lead;
  }

  get leader_name(): string {
    return this._leader_name;
  }

  get massirr(): boolean {
    return this._massirr;
  }

  get missiles(): number {
    return this._missiles;
  }

  get mlp(): boolean {
    return this._mlp;
  }

  get money(): number {
    return this._money;
  }

  get moon_landing(): boolean {
    return this._moon_landing;
  }

  get munitions(): number {
    return this._munitions;
  }

  get nation_name(): string {
    return this._nation_name;
  }

  get nrf(): boolean {
    return this._nrf;
  }

  get nukes(): number {
    return this._nukes;
  }

  get num_cities(): number {
    return this._num_cities;
  }

  get offensive_wars(): object[] {
    return this._offensive_wars;
  }

  get oil(): number {
    return this._oil;
  }

  get pirate_economy(): boolean {
    return this._pirate_economy;
  }

  get populations(): number {
    return this._populations;
  }

  get projects(): number {
    return this._projects;
  }

  get propb(): boolean {
    return this._propb;
  }

  get received_bankrecs(): any {
    return this._received_bankrecs;
  }

  get recycling_initiative(): boolean {
    return this._recycling_initiative;
  }

  get score(): number {
    return this._score;
  }

  get sent_bankrecs(): any {
    return this._sent_bankrecs;
  }

  get ships(): number {
    return this._ships;
  }

  get soldiers(): number {
    return this._soldiers;
  }

  get space_program(): boolean {
    return this._space_program;
  }

  get specialized_police_training(): boolean {
    return this._specialized_police_training;
  }

  get spies(): number {
    return this._spies;
  }

  get spy_satellite(): boolean {
    return this._spy_satellite;
  }

  get steel(): number {
    return this._steel;
  }

  get tanks(): number {
    return this._tanks;
  }

  get telecom_satellite(): boolean {
    return this._telecom_satellite;
  }

  get treasures(): any {
    return this._treasures;
  }

  get uap(): boolean {
    return this._uap;
  }

  get uranium(): number {
    return this._uranium;
  }

  get vds(): boolean {
    return this._vds;
  }

  get vmode(): number {
    return this._vmode;
  }

  get warpolicy(): string {
    return this._warpolicy;
  }

  get adv_engineering_corps(): boolean {
    return this._adv_engineering_corps;
  }

  get adv_city_planning(): boolean {
    return this._adv_city_planning;
  }
}

export default PoliticsAndWarNation;
