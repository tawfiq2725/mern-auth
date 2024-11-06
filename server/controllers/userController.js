const testRoute = async (req, res) => {
  try {
    res.json({
      message: "Working properly",
    });
  } catch (error) {
    console.log("Something wrong " + error);
  }
};

export { testRoute };
