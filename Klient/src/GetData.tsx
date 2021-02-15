import { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { Props, Food } from "./typings/List";

export async function GetData({ setLoading, setList }: Props) {
  useEffect(() => {
    async function GetData(): Promise<void> {
      try {
        setLoading(true);
        const { data } = await axios.get<Food[]>("food");
        setList(data);
      } catch (err) {
        console.log(err.response);
      } finally {
        setLoading(false);
      }
    }
  }, [setList, setLoading]);
}

GetData.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
};

GetData.propTypes = {
  setLoading: false,
  setList: [],
};
