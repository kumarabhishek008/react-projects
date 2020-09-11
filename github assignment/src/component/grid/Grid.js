import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
function AddGrid() {
    return (
        <div>
            <Grid columns='equal'>
                <Grid.Row>
                <Grid.Column>
                <Segment></Segment>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>
                    <Segment>1</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>2</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>3</Segment>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>
                    <Segment>1</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>2</Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default AddGrid
