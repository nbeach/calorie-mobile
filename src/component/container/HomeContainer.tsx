import {connect} from "react-redux";
import {Home, HomeProps} from "../presentation/Home";
import {AppState} from "../../store/state/AppState";

export const mapStateToProps = (state: AppState): HomeProps => state

export const HomeContainer = connect(mapStateToProps)(Home)

