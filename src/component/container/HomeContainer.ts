import {connect} from "react-redux"
import {Home} from "../presentation/Home"
import {AppState} from "../../store/state/AppState"

export const mapStateToProps = (state: AppState): AppState => state

export const HomeContainer = connect(mapStateToProps)(Home)

