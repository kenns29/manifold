# Development

#### Javascript
Before doing anything, make sure `node` and `yarn` is installed.

If `yarn` is not installed, install it via 

```
npm install -g yarn
```

Running a `yarn` command in the project root is necessary to setup the dev environment (also pulling the necessary dependencies). To do so, navigate to the root of repository and run

```
yarn
```

After the `yarn` command completes, navigate back to the `bindings/jupyter` folder and build the JS code

```
cd js
yarn
yarn build
```

For development, it is recommanded to run 

```
yarn watch
```

instead of `yarn build` because it will watch for changes of the JS code.

#### Python

It is recommended to first start a virtual environment in the project folder:

```
python -m venv venv
source venv/bin/activate
```

First install ipywidgets

<!-- todo: ipywidgets should be installed together with `python setup.py install`-->

```
pip install ipywidgets
jupyter nbextension enable --py widgetsnbextension
```

To run the code directly under this directory, the Jupyter nbextension needs to be installed in this local environment:

```
python setup.py develop
```

#### Run

Start the Jupyter Notebook directly under this directory:

```
jupyter notebook
```

Then, create a notebook and test out the library.

#### Build

To build the package into the example directly, please use the following command:

```
python setup.py sdist bdist_wheel
mv dist ../../examples/jupyter/
```

To test the built package in the example folder, go to _mlvis-toolkit/examples/jupyter_, and perform the following stepts:

1. start a virtual environment
2. run `pip install -r requirements.txt`
3. run `pip install ./dist/mlvis-[version].tar.gz`
4. execute `jupyter notebook` there.
