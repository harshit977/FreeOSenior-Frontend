import React, { useState } from "react"
import {
  Divider,
  
  Grid,
 
  TextField,
  Button,
  ButtonGroup,
  Typography,
} from "@material-ui/core"

import axiosFetch from "../../utils/axiosFetch"
const PostAnswer = ({ qid, setReload = f => f, reload  }) => {
  const [desc, setDesc] = useState("")
  const postReply = async event => {
    event.preventDefault()
    console.log("hello")

    if (!qid || desc.length < 10) {
      window.alert("cannot reply may be invalid query or add valid reply")
      return
    }

    try {
      const res = await axiosFetch.post(`api/comment/${qid}`, { desc })
      if (res.data) {
        console.log(res.data)
        window.alert("success fully replied")
        setReload(!reload)
        setDesc('');
      }
    } catch (error) {
      window.alert(error)
      console.log(error.response.data.erorr)
    }
  }

  return (
    <>
      <Divider variant="inset" />

      <Grid container wrap="nowrap" spacing={2} style={{ margin: "20px auto" }}>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography variant="h2" style={{ marginTop: 10 }}>
            Your answer
          </Typography>
          <TextField
            id="outlined-basic"
            value={desc}
            onChange={e => setDesc(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>

      <ButtonGroup
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button onClick={postReply}>Post your reply</Button>
      </ButtonGroup>
    </>
  )
}

export default PostAnswer