import React, {Component} from 'react';
import Button from 'antd-mobile/lib/button'
import Flex from 'antd-mobile/lib/flex'

class AntDesign extends Component {

    render() {
        return (
            <Flex justify="between">
                <Button flex="2">Start</Button>
                <Button>Start</Button>
                <Button>Start</Button>
            </Flex>)
    }

}

export default AntDesign