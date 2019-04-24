import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/postActions';

class Post extends Component {
	componentDidMount() {
		this.props.getPost(this.props.match.params.id);
	}

	render() {
		const { post, loading } = this.props;
		let postContent;

		if (post === null || loading || Object.keys(post).length === 0) {
			postContent = <Spinner />;
		} else {
			postContent = (
				<div>
					<PostItem post={post} />
				</div>
			);
		}
		return (
			<div>
				<h1>POST</h1>
			</div>
		);
	}
}

Post.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(
	mapStateToProps,
	{ getPost }
)(Post);
