import { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Food, Props } from "./typings/List";

export async function GetData({ setLoading, setList }: Props) {
  async function GetData(): Promise<void> {
    try {
      setLoading && setLoading(true);
      const { data } = await axios.get<Food[]>("food");
      setList(data);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading && setLoading(false);
    }
  }

  useEffect(() => {
    GetData();
  }, []);
}

GetData.propTypes = {
  setLoading: PropTypes.bool.isRequired,
  setList: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.string.isRequired,
  getId: PropTypes.string.isRequired,
  setId: PropTypes.string.isRequired,
};
GetData.defaultProps = {
  setLoading: false,
  setList: [],
  list: [],
  loading: false,
  view: "",
  setView: "",
  getId: "",
  setId: "",
};
