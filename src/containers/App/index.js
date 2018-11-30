import React, {Component} from 'react';
import './index.css';
import Search from '../../components/Search';
import Table from '../../components/Table';
import Button from "../../components/Button";
import {connect} from "react-redux";
import {searchWrite, searchSubmit} from "../../actions/Search";

class App extends Component {
    // _isMounted = false;
    //
    constructor(props) {
        super(props);
    //
    //     this.state = {
    //         results: null,
    //         searchKey: '',
    //         searchTerm: DEFAULT_QUERY,
    //         error: null,
    //         isLoading: false
    //     };
    //
    //     this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    //     this.setSearchTopStories = this.setSearchTopStories.bind(this);
    //     this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    //     this.onSearchChange = this.onSearchChange.bind(this);
         this.onSearchSubmit = this.onSearchSubmit.bind(this);
    //     this.onDismiss = this.onDismiss.bind(this);
    }
    //
    // needsToSearchTopStories(searchTerm) {
    //     return !this.state.results[searchTerm];
    // }
    //
    // fetchSearchTopStories(searchTerm, page = 0) {
    //     this.setState({
    //         isLoading: true
    //     });
    //
    //     axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    //         .then(result => this._isMounted && this.setSearchTopStories(result.data))
    //         .catch(error => this._isMounted && this.setState({ error }));
    // }
    //
    onSearchSubmit(event, func) {
        // const { searchTerm } = this.state;
        // this.setState({ searchKey: searchTerm });
        //
        // if (this.needsToSearchTopStories(searchTerm)) {
        //     this.fetchSearchTopStories(searchTerm);
        // }
        func();

        event.preventDefault();
    }
    //
    // setSearchTopStories(result) {
    //     const { hits, page } = result;
    //
    //     this.setState(updateSearchTopStoriesState(hits, page));
    // }
    //
    // componentDidMount() {
    //     this._isMounted = true;
    //
    //     this.setState((prevSate) => {
    //         const { searchTerm } = prevSate;
    //         return { searchKey: searchTerm };
    //     });
    //
    //     this.fetchSearchTopStories(this.state.searchTerm);
    // }
    //
    // componentWillUnmount() {
    //     this._isMounted = false;
    // }
    //
    // onDismiss(id) {
    //     const isNotId = item => item.objectID !== id;
    //
    //     this.setState(updateStoriesStateAfterDismiss(isNotId))
    // };
    //
    onSearchChange(event, func) {
        // this.setState({ searchTerm: event.target.value });
        func(event.target.value);
    }

    render() {
        const { search, searchWrite, searchSubmit } = this.props;
        const {searchTerm} = search;
        // const page = (articles && articles[searchKey] && articles[searchKey].page) || 0;
        // const page = 0;
        // const list = (articles && articles[searchKey] && articles[searchKey].hits) || [];

        // if (error) {
        //     return <p>Что-то произошло не так.</p>
        // }

        return (
            <div className='page'>
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onChange={(event) => this.onSearchChange(event, searchWrite)}
                        onSubmit={(event) => this.onSearchSubmit(event, searchSubmit)}
                    >
                        Поиск
                    </Search>
                </div>
                {/*{ error*/}
                    {/*? <div className='interactions'>*/}
                        {/*<p>Something went wrong.</p>*/}
                    {/*</div>*/}
                    {/*: <Table*/}
                        {/*list={list}*/}
                        {/*onDismiss={this.onDismiss}*/}
                    {/*/>*/}
                {/*}*/}
                {/*<div className="interactions">*/}
                    {/*<ButtonWithLoading*/}
                        {/*isLoading={isLoading}*/}
                        {/*// onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}*/}
                        {/*onClick={loadList}*/}
                    {/*>*/}
                        {/*Больше историй*/}
                    {/*</ButtonWithLoading>*/}
                {/*</div>*/}
            </div>
        );
    }
}
//
const Loading = () => <div>Загрузка ...</div>;

const withLoading = (Component) => ({ isLoading, ...rest }) =>
    isLoading
        ? <Loading/>
        : <Component { ...rest }/>;

const ButtonWithLoading = withLoading(Button);

// const updateSearchTopStoriesState = (hits, page) => (prevState) => {
//     const {searchKey, results} = prevState;
//
//     const oldHits = results && results[searchKey]
//         ? results[searchKey].hits
//         : [];
//
//     const updateHits = [
//         ...oldHits,
//         ...hits
//     ];
//
//     return {
//         results: {
//             ...results,
//             [searchKey]: {hits: updateHits, page}
//         },
//         isLoading: false
//     };
// };
//
// const updateStoriesStateAfterDismiss = (isNotId) => (prevState) => {
//     const { searchKey, results } = prevState;
//     const { hits, page } = results[searchKey];
//
//     const updatedList = hits.filter(isNotId);
//
//     return {
//         results: {
//             ...results,
//             [searchKey]: {hits: updatedList, page}
//         }
//     };
// };

const mapStateToProps = store => ({
    // list: store.articles.list,
    // searchTerm: store.articles.searchTerm,
    // searchKey: store.articles.searchKey,
    // error: store.articles.error,
    search: store.search,
});

const mapDispatchToProps = dispatch => ({
    searchWrite: key => dispatch(searchWrite(key)),
    searchSubmit: () => dispatch(searchSubmit()),
    // loadList: page => dispatch(loadList(page)),
    // getPhotos: year => dispatch(getPhotos(year)),
    // handleLogin: () => dispatch(handleLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

export {
    Button,
    Search,
    Table
}