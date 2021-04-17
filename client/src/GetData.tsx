import { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { Props, Food } from "typings";

export async function GetData({ setLoading, setList, setError }: Props) {
  useEffect(() => {
    async function GetData(): Promise<void> {
      try {
        setLoading && setLoading(true);
        const { data } = await axios.get<Food[]>("food");
        setList && setList(data);
      } catch (err) {
        setError && setError(err.response);
      } finally {
        setLoading && setLoading(false);
      }
    }
  }, [setList, setLoading, setError]);
}

GetData.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

GetData.propTypes = {
  setLoading: false,
  setList: [],
  setError: "",
};
