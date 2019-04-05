import {connect, MapStateToProps} from "react-redux"
import {Home, HomeStateProps} from "../presentation/Home"
import {AppState} from "../../store/state/AppState"

export const mapStateToProps: MapStateToProps<HomeStateProps, void, AppState>  = (state) => state

export const HomeContainer = connect(mapStateToProps)(Home)
