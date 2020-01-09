import React from 'react'

class YouTubeDebbuger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div className="btn-container">
                <button onClick={this.handleBitChange} className="bitrate">Change Bitrate</button>
                <button onClick={this.handleResChange} className="resolution">Change Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebbuger
