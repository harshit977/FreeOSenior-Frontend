import React from 'react';
import { Divider, Avatar, Grid, Paper, TextField, Button, ButtonGroup, Container } from "@material-ui/core"
import Answer from './Answer';
import PostAnswer from './PostAnswer';

const Question = ({data={
  author:{
    firstname:'demo',
    lastname:'demo',
  },
  title:'demo',
  desc:"demo",
  comments:[],
}}

) => {

  console.log(data);

    return (
      <Container>
        <Paper
          style={{ padding: "40px 20px", margin: "30px auto" }}
          variant="outlined"
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>{data.author.firstname.slice(0, 1)}</Avatar>
            </Grid>

            <Grid justifyContent="left" item xs zeroMinWidth>
              <h2 style={{ margin: 0, textAlign: "left" }}>{data?.title}</h2>
              <h4 style={{ margin: 0, textAlign: "left" }}>
                {data?.author?.firstname} {data?.author?.lastname}
              </h4>
              <TextField
                id="outlined-basic"
                disabled
                value={data.desc}
                variant="outlined"
                fullWidth
              />
              <Grid item style={{ padding: "40px" }}>
                <Answer />
                {data.comments.length > 0 ? (
                  data.comments.map(d => <Answer data={d} />)
                ) : (
                  <Answer />
                )}

                <PostAnswer/>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <ButtonGroup
              color="primary"
              aria-label="vertical contained primary button group"
              variant="contained"
            >
              <Button>update</Button>
              <Button>mark resolved</Button>
              <Button>delete</Button>
            </ButtonGroup>
          </Grid>
        </Paper>
      </Container>
    )
}

export default Question;
