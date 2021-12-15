/** @format */

import axios from "axios";
import {
  PROFILE_UPDATE_FAIL,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_LOADED_SUCCESS,
  PROFILE_LOADED_FAIL,
  PROFILE_CREATED_FAIL,
  PROFILE_CREATED_SUCCESS,
} from "./types";
export const set_status = (status) => async (dispatch) => {};
export const create_profile = (username, email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const body = JSON.stringify({
    username,
    email,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/profile/`,
      body,
      config,
    );

    dispatch({
      type: PROFILE_CREATED_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_CREATED_FAIL,
    });
  }
};

export const get_profile = (username) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const body = JSON.stringify({ username });

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/profile/`,
      body,
      config,
    );
    dispatch({
      type: PROFILE_LOADED_SUCCESS,
      payload: res.data[0],
    });
  } catch (err) {
    dispatch({
      type: PROFILE_LOADED_FAIL,
    });
  }
};

export const update_profile =
  (
    id,
    username,
    email,
    mobile,
    phone,
    state,
    city,
    language,
    locate,
    search_active,
    law_school,
    grad_year,
    bar_admit_date,
    undergrad_school,
    undergrad_area,
    undergrad_year,
    bar_no,
    admitted_practice,
    practice_time,
    longest_tenure,
    average_tenure,
    current_tenure,
    past_bar_companies_no,
    primary_area,
  ) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      username,
      email,
      mobile,
      phone,
      state,
      city,
      language,
      locate,
      search_active,
      law_school,
      grad_year,
      bar_admit_date,
      undergrad_school,
      undergrad_area,
      undergrad_year,
      bar_no,
      admitted_practice,
      practice_time,
      longest_tenure,
      average_tenure,
      current_tenure,
      past_bar_companies_no,
      primary_area,
    });

    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/profile/${id}`,
        body,
        config,
      );
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_UPDATE_FAIL,
      });
    }
  };
